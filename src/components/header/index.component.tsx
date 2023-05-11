import { FC, useContext } from "react";

import Logo from '../../assets/logos/logo.png'
import Toggle from "../theme-toggle/index.component";
import FirstKeyPressedContext from "../../contexts/first-key-pressed-context";
import TimerContext from "../../contexts/timer-context";
import ThemeContext from "../../contexts/theme-context";

interface HeaderProps {
  headerStyle?: string;
}

const Header: FC<HeaderProps> = ({ headerStyle }) => {
  const { isFirstKeyPressed } = useContext(FirstKeyPressedContext);
  const { isDarkTheme } = useContext(ThemeContext);
  const { timer } = useContext(TimerContext);

  return <div className={`flex items-center justify-between py-8 bg-transparent px-12 sm:px-24 lg:px-64 ${ headerStyle }`}>
    <img src={Logo} alt="logo" className="h-20" />
    {(!isFirstKeyPressed || timer === 0) && <div className="toggle-container flex flex-row gap-4 items-center"><span className={`text-body2 ${isDarkTheme ? 'text-dark-white' : 'text-light-darkest'}`}>THEME</span><Toggle /></div>}
  </div>;
};

export default Header;
