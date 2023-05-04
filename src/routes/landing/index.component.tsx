import { FC } from "react";

import WordCounter from "../../components/word-counter/index.component";
import Timer from "../../components/timer/index.component";
import WordDisplay from "../../components/word-display/index.component";
import Header from "../../components/header/index.component";

interface LandingPageProps {
  landingPageStyles?: string;
}

const LandingPage: FC<LandingPageProps> = ({ landingPageStyles = '' }) => {
  return (
    <div className={`landing ${landingPageStyles}`}>
      <Header headerStyle="mb-24" />
      <div className="flex justify-between items-center px-12 sm:px-24 lg:px-64 mb-4">
        <Timer />
        <WordCounter />
      </div>
      <WordDisplay
        numWords={200}
        maxWordLength={5}
        wordDisplayStyle="px-12 sm:px-24 lg:px-64 text-justify"
      />
    </div>
  );
};

export default LandingPage;