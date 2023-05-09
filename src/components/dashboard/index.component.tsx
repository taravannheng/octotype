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
        <div className={`dashboard w-full flex justify-between ${dashboardStyle}`}>
          <div className="wpm">
            <Card
              titleText="Word Per Minute"
              descriptionText={wordCounter}
              descriptionStyle="text-primary"
              titleStyle="text-neutral-grey-2 text-body1"
              cardStyle="bg-neutral-grey-4"
            />
          </div>
          <div className="accuracy">
            <Card
              titleText="Accuracy"
              descriptionText={`${accuracy}%`}
              descriptionStyle="text-primary"
              titleStyle="text-neutral-grey-2 text-body1"
              cardStyle="bg-neutral-grey-4"
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
