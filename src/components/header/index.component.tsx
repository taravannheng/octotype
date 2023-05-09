import { FC } from "react";

import Logo from '../../assets/logos/logo.png'

interface HeaderProps {
  headerStyle?: string;
}

const Header: FC<HeaderProps> = ({ headerStyle }) => {
  return <div className={`flex align-items justify-center py-8 bg-transparent ${ headerStyle }`}>
    <img src={Logo} alt="logo" className="h-20" />
  </div>;
};

export default Header;
