import { FC, Fragment, useState } from "react";
import { faClose, faInfo } from "@fortawesome/free-solid-svg-icons";

import WordCounter from "../../components/word-counter/index.component";
import Timer from "../../components/timer/index.component";
import WordDisplay from "../../components/word-display/index.component";
import Header from "../../components/header/index.component";
import InstructionText from "../../components/instruction-text/index.component";
import Modal from "../../components/modal/index.component";
import Logo from '../../assets/logos/logo.png';
import Banner from "../../components/banner/index.component";

interface LandingPageProps {
  landingPageStyles?: string;
}

const LandingPage: FC<LandingPageProps> = ({ landingPageStyles = "" }) => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  return (
    <Fragment>
      <Modal modalStyle="lg:hidden">
        <img src={Logo} alt="logo" className="h-[100px] md:h-[200px] mb-[96px]" />
        <Banner isOpen={isBannerOpen} setIsOpen={setIsBannerOpen} titleText="Alert" descriptionText="This application is only available for desktop only!" titleTextStyle="text-status-error text-h5" iconSrc={faInfo} iconStyle="text-neutral-light bg-status-error" />
      </Modal>
      <div className={`landing w-full flex flex-col justify-center hidden lg:block ${landingPageStyles}`}>
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
    </Fragment>
  );
};

export default LandingPage;
