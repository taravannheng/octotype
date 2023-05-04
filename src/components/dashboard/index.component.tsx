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
        <div className={`dashboard flex ${dashboardStyle}`}>
          <div className="wpm flex-1 mr-16">
            <Card
              titleText="Word Per Minute"
              descriptionText={wordCounter}
              descriptionStyle="text-neutral-light"
              titleStyle="text-neutral-light"
              cardStyle="bg-primary"
            />
          </div>
          <div className="accuracy flex-1">
            <Card
              titleText="Accuracy"
              descriptionText={`${accuracy}%`}
              descriptionStyle="text-neutral-light"
              titleStyle="text-neutral-light"
              cardStyle="bg-primary"
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
