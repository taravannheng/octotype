import { FC, Fragment, useContext } from "react";

import Card from "../card/index.component";
import WordCounterContext from "../../contexts/word-counter-context";
import AccuracyContext from "../../contexts/accuracy-context";

interface DashboardProps {
  dashboardStyle?: string;
}

const Dashboard: FC<DashboardProps> = ({ dashboardStyle = "" }) => {
  const { wordCounter } = useContext(WordCounterContext);
  const { accuracy } = useContext(AccuracyContext);

  return (
    <Fragment>
      {(
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
              descriptionText={`${accuracy}%`}
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
