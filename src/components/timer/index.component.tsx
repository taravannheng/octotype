import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TimerContext from "../../contexts/timer-context";
import ThemeContext from "../../contexts/theme-context";
import AccuracyContext from "../../contexts/accuracy-context";
import TotalLetterTypedContext from "../../contexts/total-letter-typed";
import CurrentLetterIndexContext from "../../contexts/current-letter-index-context";
import FirstKeyPressedContext from "../../contexts/first-key-pressed-context";
import { ROUTES } from "../../utils/constants";
import { calculateAccuracy } from "../../utils/helpers";

interface TimerProps {
  timerStyle?: string;
}

const Timer: FC<TimerProps> = ({ timerStyle = "" }) => {
  const { timer, setTimer } = useContext(TimerContext);
  const { isDarkTheme } = useContext(ThemeContext);
  const { totalLetterTyped } = useContext(TotalLetterTypedContext);
  const { currentLetterIndex } = useContext(CurrentLetterIndexContext);
  const { isFirstKeyPressed } = useContext(FirstKeyPressedContext);
  const { setAccuracy } = useContext(AccuracyContext);
  const [timerColor, setTimerColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isFirstKeyPressed) {
      const interval = setInterval(() => {
        // set to 41 and 21 because react doesn't re-render immediately
        if (timer === 41) {
          if (isDarkTheme) {
            // need to add text-light-status-warning as a fallback for dark theme because text-dark-status-warning does not takes effect
            setTimerColor("text-light-status-warning text-dark-status-warning");
          }

          if (!isDarkTheme) {
            setTimerColor("text-light-status-warning");
          }
        }
  
        if (timer === 21) {
          setTimerColor("text-light-status-error text-dark-status-error");
        }
  
        setTimer((prevTimer: number) => prevTimer - 1);
      }, 1000);
  
      if (timer === 0) {
        // currentLetterIndex represents correct letter typed
        const accuracy = calculateAccuracy(currentLetterIndex, totalLetterTyped);
        setAccuracy(accuracy);

        clearInterval(interval);

        navigate(ROUTES.SUMMARY);
      }
  
      return () => clearInterval(interval);
    }
  }, [timer, isFirstKeyPressed]);

  return (
    <span className={`text-h3 ${isDarkTheme ? 'text-dark-white' : 'text-light-dark'} ${timerColor} ${timerStyle}`}>
      {timer}
    </span>
  );
};

export default Timer;
