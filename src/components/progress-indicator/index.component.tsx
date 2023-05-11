import { FC, useContext } from "react";
import { motion } from "framer-motion";

import Logo from '../../assets/logos/logo.png';
import ThemeContext from "../../contexts/theme-context";

interface ProgressIndicatorProps {
  progressIndicatorStyle?: string;
}

const ProgressIndicator: FC<ProgressIndicatorProps> = ({ progressIndicatorStyle = '' }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`flex h-screen w-full flex-col items-center justify-center gap-y-16 ${isDarkTheme ? "bg-dark-darkest" : "bg-light-light"}  ${progressIndicatorStyle}`}>
      <img src={Logo} alt="site logo" className={`min-h-16 h-16 max-h-16`} />
      <div className={`progress-track h-[8px] w-[200px] overflow-hidden rounded-full ${isDarkTheme ? "bg-dark-dark" : "bg-light-white"} p-[2px]`}>
        <motion.div
          className="active-indicator h-[4px] w-[40px] rounded-full bg-dark-primary bg-light-primary"
          initial={{ x: -10 }}
          animate={{ x: [-10, 170, -10] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressIndicator;