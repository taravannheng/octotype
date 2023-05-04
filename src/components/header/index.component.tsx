import { FC } from "react";

import Logo from '../../assets/logos/logo.png'

interface HeaderProps {
  headerStyle?: string;
}

const Header: FC<HeaderProps> = ({ headerStyle }) => {
  return <div className={`flex align-items py-4 px-12 sm:px-24 lg:px-64 bg-neutral-light ${ headerStyle }`}>
    <img src={Logo} alt="logo" className="h-8" />
  </div>;
};

export default Header;
