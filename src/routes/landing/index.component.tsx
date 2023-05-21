import { FC, Fragment, useState, useContext } from "react";
import { faClose, faInfo } from "@fortawesome/free-solid-svg-icons";

import WordCounter from "../../components/word-counter/index.component";
import Timer from "../../components/timer/index.component";
import WordDisplay from "../../components/word-display/index.component";
import Header from "../../components/header/index.component";
import InstructionText from "../../components/instruction-text/index.component";
import Modal from "../../components/modal/index.component";
import Logo from "../../assets/logos/logo.png";
import Banner from "../../components/banner/index.component";
import ThemeContext from "../../contexts/theme-context";

interface LandingPageProps {
  landingPageStyles?: string;
}

const LandingPage: FC<LandingPageProps> = ({ landingPageStyles = "" }) => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      {/* <Modal modalStyle="lg:hidden">
        <img
          src={Logo}
          alt="logo"
          className="h-[100px] md:h-[200px] mb-[96px]"
        />
        <Banner
          isOpen={isBannerOpen}
          setIsOpen={setIsBannerOpen}
          titleText="Alert"
          descriptionText="This application is available for desktop only!"
          titleTextStyle="text-dark-status-error text-h5"
          iconSrc={faInfo}
          iconStyle="text-dark-white bg-dark-status-error"
        />
      </Modal> */}
      <div
        className={`landing min-w-screen w-screen max-w-screen min-h-screen h-screen max-h-screen overflow-hidden flex flex-col justify-center lg:block transition-bg duration-300 ${
          isDarkTheme ? "bg-dark-darkest" : "bg-light-light"
        } ${landingPageStyles}`}
      >
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
