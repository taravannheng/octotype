import { FC, useContext } from "react";

import ThemeContext from "../../contexts/theme-context";
import AnimateNumber from "../animate-number/index.component";

interface CardProps {
  cardStyle?: string;
  titleStyle?: string;
  descriptionStyle?: string;
  titleText: string;
  descriptionText?: string;
  animateNumber?: {number: number, text: string};
}

const Card: FC<CardProps> = ({
  cardStyle = "",
  titleStyle = "",
  descriptionStyle = "text-dark-primary",
  titleText,
  descriptionText,
  animateNumber,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`card overflow-hidden relative rounded-lg shadow-lg6 z-10 text-h3 flex items-center flex-col justify-center min-w-[320px] w-[320px] max-w-[320px] min-h-[240px] h-[240px] max-h-[240px] ${
        isDarkTheme ? "bg-dark-dark" : "bg-light-white"
      } ${cardStyle}`}
    >
      <span className={`mb-6 ${isDarkTheme ? 'text-dark-darkest' : 'text-light-dark'} ${titleStyle}`}>{titleText}</span>{" "}
      <span
        className={`text-h1 text-[80px] max-w-full truncate ${descriptionStyle}`}
      >
        {descriptionText && descriptionText}
        {animateNumber && <AnimateNumber targetNumber={animateNumber} />}
      </span>
    </div>
  );
};

export default Card;
