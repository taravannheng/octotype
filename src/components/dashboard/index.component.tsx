import { FC, Fragment, useContext } from "react";

import Card from "../card/index.component";
import WordCounterContext from "../../contexts/word-counter-context";
import AccuracyContext from "../../contexts/accuracy-context";

interface DashboardProps {
  dashboardStyle?: string;
  cardStyle?: string;
}

const Dashboard: FC<DashboardProps> = ({ dashboardStyle = "", cardStyle = "" }) => {
  const { wordCounter } = useContext(WordCounterContext);
  const { accuracy } = useContext(AccuracyContext);

  return (
    <Fragment>
      {(
        <div className={`dashboard min-w-full w-full max-w-full ${dashboardStyle}`}>
          <div className="wpm">
            <Card
              titleText="Word Per Minute"
              descriptionText={wordCounter}
              descriptionStyle="text-dark-primary"
              titleStyle="text-dark-light text-body1"
              cardStyle={`bg-dark-dark ${cardStyle}`}
            />
          </div>
          <div className="accuracy">
            <Card
              titleText="Accuracy"
              descriptionText={`${accuracy}%`}
              descriptionStyle="text-dark-primary"
              titleStyle="text-dark-light text-body1"
              cardStyle={`bg-dark-dark ${cardStyle}`}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
