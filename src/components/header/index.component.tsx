import { FC, useContext } from "react";

import Logo from '../../assets/logos/logo.png'
import Toggle from "../theme-toggle/index.component";
import FirstKeyPressedContext from "../../contexts/first-key-pressed-context";
import { INITIAL_CONFIG } from "../../utils/constants";

interface HeaderProps {
  headerStyle?: string;
}

const Header: FC<HeaderProps> = ({ headerStyle }) => {
  const { isFirstKeyPressed } = useContext(FirstKeyPressedContext);

  return <div className={`flex items-center justify-between py-8 bg-transparent px-12 sm:px-24 lg:px-64 ${ headerStyle }`}>
    <img src={Logo} alt="logo" className="h-20" />
    {!isFirstKeyPressed && <Toggle />}
  </div>;
};

export default Header;
