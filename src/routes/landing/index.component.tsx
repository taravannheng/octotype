import { FC, Fragment } from "react";

import WordCounter from "../../components/word-counter/index.component";
import Timer from "../../components/timer/index.component";
import WordDisplay from "../../components/word-display/index.component";
import Header from "../../components/header/index.component";
import InstructionText from "../../components/instruction-text/index.component";
import Modal from "../../components/modal/index.component";
import Logo from '../../assets/logos/logo.png';

interface LandingPageProps {
  landingPageStyles?: string;
}

const LandingPage: FC<LandingPageProps> = ({ landingPageStyles = "" }) => {
  return (
    <Fragment>
      <Modal modalStyle="lg:hidden" logoSrc={Logo} text="This application is only available for desktop!" />
      <div className={`landing hidden lg:block ${landingPageStyles}`}>
        <Header headerStyle="mb-36" />
        <div className="flex justify-between items-center px-12 sm:px-24 lg:px-64 mb-4">
          <Timer />
          <InstructionText
            text="Type the first letter to start..."
            instructionTextStyle="animate-slow-blink"
          />
          <WordCounter />
        </div>
        <WordDisplay
          numWords={200}
          maxWordLength={5}
          wordDisplayStyle="px-12 sm:px-24 lg:px-64 text-justify"
        />
      </div>
    </Fragment>
  );
};

export default LandingPage;
