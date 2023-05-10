import { FC, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import ThemeContext from "../../contexts/theme-context";

interface ButtonProps {
  buttonStyle?: string;
  label: string;
  iconSrc?: IconProp;
  onClick?: () => any;
}

const Button: FC<ButtonProps> = ({
  buttonStyle = "",
  label,
  iconSrc,
  onClick,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={`button max-w-full w-full hover:bg-dark-primary focus:bg-light-primary focus:bg-dark-primary focus:outline-none text-body2 rounded-lg py-3 px-4 ${isDarkTheme ? 'bg-dark-dark text-dark-white' : 'bg-light-white text-light-darkest focus:text-light-white'} ${buttonStyle}`}
    >
      {label}
      {iconSrc && (
        <FontAwesomeIcon icon={iconSrc} className="h-[16px] w-[16px] ml-2" />
      )}
    </button>
  );
};

export default Button;
