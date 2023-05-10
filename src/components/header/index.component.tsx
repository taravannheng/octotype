import { FC } from "react";

import Logo from '../../assets/logos/logo.png'
import Toggle from "../theme-toggle/index.component";

interface HeaderProps {
  headerStyle?: string;
}

const Header: FC<HeaderProps> = ({ headerStyle }) => {
  return <div className={`flex items-center justify-between py-8 bg-transparent px-12 sm:px-24 lg:px-64 ${ headerStyle }`}>
    <img src={Logo} alt="logo" className="h-20" />
    <Toggle />
  </div>;
};

export default Header;
