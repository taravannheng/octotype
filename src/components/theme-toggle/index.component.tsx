import { FC, useContext } from "react";

import ThemeContext from "../../contexts/theme-context";

interface ThemeToggleProps {
  toggleStyle?: string;
  trackStyle?: string;
  thumbStyle?: string;
}

const ThemeToggle: FC<ThemeToggleProps> = ({
  toggleStyle = "",
  trackStyle = "",
  thumbStyle = "",
}) => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const themeToggleHandler = () => {
    setIsDarkTheme((prevTheme: boolean) => !prevTheme);
  };

  return (
    <div
      className={`toggle min-w-[64px] w-[64px] max-w-[64px] min-h-[24px] h-[24px] max-h-[24px] relative ${toggleStyle}`}
    >
      <div
        className={`toggle__track rounded-full min-w-full w-full max-w-full min-h-full h-full max-h-full transition-all duration-300 ${
          isDarkTheme ? "bg-dark-white" : "bg-dark-primary"
        } ${trackStyle}`}
      ></div>
      <div
        className={`toggle__thumb min-w-[16px] w-[16px] max-w-[16px] min-h-[16px] h-[16px] max-h-[16px] rounded-full absolute top-[4px] transition-all duration-300 ${
          isDarkTheme
            ? "left-[4px] bg-dark-darkest"
            : "left-[44px] bg-dark-white"
        } cursor-pointer ${thumbStyle}`}
        onClick={themeToggleHandler}
      ></div>
    </div>
  );
};

export default ThemeToggle;
