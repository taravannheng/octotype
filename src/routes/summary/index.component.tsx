import { FC, useContext } from "react";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import Dashboard from "../../components/dashboard/index.component";
import Header from "../../components/header/index.component";
import Button from "../../components/button/index.component";
import TimerContext from "../../contexts/timer-context";
import AccuracyContext from "../../contexts/accuracy-context";
import CurrentLetterIndexContext from "../../contexts/current-letter-index-context";
import FirstKeyPressedContext from "../../contexts/first-key-pressed-context";
import TotalLetterTypedContext from "../../contexts/total-letter-typed";
import WordCounterContext from "../../contexts/word-counter-context";
import { INITIAL_CONFIG, ROUTES } from "../../utils/constants";

interface SummaryProps {
  summaryPageStyle?: string;
}

const Summary: FC<SummaryProps> = ({ summaryPageStyle = "" }) => {
  const { setTimer } = useContext(TimerContext);
  const { setAccuracy } = useContext(AccuracyContext);
  const { setCurrentLetterIndex } = useContext(CurrentLetterIndexContext);
  const { setIsFirstKeyPressed } = useContext(FirstKeyPressedContext);
  const { setTotalLetterTyped } = useContext(TotalLetterTypedContext);
  const { setWordCounter } = useContext(WordCounterContext);
  const navigate = useNavigate();

  const refreshHandler = () => {
    // reset values in context
    setTimer(INITIAL_CONFIG.TIMER);
    setAccuracy(INITIAL_CONFIG.ACCURACY);
    setCurrentLetterIndex(INITIAL_CONFIG.CURRENT_LETTER_INDEX);
    setIsFirstKeyPressed(INITIAL_CONFIG.FIRST_KEY_PRESSED);
    setTotalLetterTyped(INITIAL_CONFIG.TOTAL_LETTER_TYPED);
    setWordCounter(INITIAL_CONFIG.WORD_COUNTER);

    navigate(ROUTES.LANDING);
  };

  return (
    <div className={`summary ${summaryPageStyle}`}>
      <Header headerStyle="mb-24 flex items-center justify-center" />
      <div className="summary-body px-12 sm:px-24 lg:px-64">
        <h1 className="text-h2 flex justify-center items-center mb-12 text-neutral-light">
          Your Stats
        </h1>
        <Dashboard dashboardStyle="flex justify-center items-center flex-row mb-8 px-44" />
        <div className="button-container px-44">
          <Button
            label="Refresh"
            iconSrc={faRotateRight}
            onClick={refreshHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
