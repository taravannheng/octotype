import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
  return (
    <button
      onClick={onClick}
      className={`button max-w-full w-full bg-dark text-white hover:bg-primary focus:bg-primary focus:outline-none text-body2 rounded-lg py-3 px-4 ${buttonStyle}`}
    >
      {label}
      {iconSrc && (
        <FontAwesomeIcon icon={iconSrc} className="h-[16px] w-[16px] ml-2" />
      )}
    </button>
  );
};

export default Button;
