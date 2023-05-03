import { FC } from "react";

import Logo from '../../assets/logos/logo.png'

interface HeaderProps {
  headerStyle?: string;
}

const Header: FC<HeaderProps> = ({ headerStyle }) => {
  return <div className={`flex justify-center align-items pt-16 ${ headerStyle }`}>
    <img src={Logo} alt="logo" className="h-24 sm:h-24 xl:24" />
  </div>;
};

export default Header;
