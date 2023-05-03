import { FC, Fragment, useContext } from "react";

import Card from "../card/index.component";
import TimerContext from "../../contexts/timer-context";
import WordCounterContext from "../../contexts/word-counter-context";

interface DashboardProps {
  dashboardStyle?: string;
}

const Dashboard: FC<DashboardProps> = ({ dashboardStyle = "" }) => {
  const { timer } = useContext(TimerContext);
  const { wordCounter } = useContext(WordCounterContext);

  return (
    <Fragment>
      {timer === 0 && (
        <div className={`dashboard ${dashboardStyle}`}>
          <div className="wpm mr-16">
            <Card
              titleText="Word Per Minute"
              descriptionText={wordCounter}
              descriptionStyle="text-neutral-light"
              titleStyle="text-neutral-light"
              cardStyle="bg-primary w-80"
            />
          </div>
          <div className="accuracy">
            <Card
              titleText="Accuracy"
              descriptionText="20"
              descriptionStyle="text-neutral-light"
              titleStyle="text-neutral-light"
              cardStyle="bg-primary w-80"
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
