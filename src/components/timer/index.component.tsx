import { FC, useContext, useEffect, useState } from "react";

import TimerContext from "../../contexts/timer-context";
import FirstKeyPressedContext from "../../contexts/first-key-pressed-context";

interface TimerProps {
  timerStyle?: string;
}

const Timer: FC<TimerProps> = ({ timerStyle = "" }) => {
  const { timer, setTimer } = useContext(TimerContext);
  const { isfirstKeyPressed: isFirstKeyPressed } = useContext(FirstKeyPressedContext);
  const [timerColor, setTimerColor] = useState("text-neutral-light");

  useEffect(() => {
    console.log(isFirstKeyPressed)
    if (isFirstKeyPressed) {
      const interval = setInterval(() => {
        // set to 41 and 21 because react doesn't re-render immediately
        if (timer === 41) {
          setTimerColor("text-status-warning");
        }
  
        if (timer === 21) {
          setTimerColor("text-status-error");
        }
  
        setTimer((prevTimer: number) => prevTimer - 1);
      }, 1000);
  
      if (timer === 0) {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }
  }, [timer, isFirstKeyPressed]);

  return (
    <span className={`text-h3 text-neutral-light ${timerColor} ${timerStyle}`}>
      {timer} {!isFirstKeyPressed && <span className="text-neutral-light text-body">Type the first letter to start...</span>}
    </span>
  );
};

export default Timer;
