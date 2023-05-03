import { FC } from "react";

interface CardProps {
  cardStyle?: string;
  titleStyle?: string;
  descriptionStyle?: string;
  titleText: string;
  descriptionText: string;
}

const Card: FC<CardProps> = ({
  cardStyle = "",
  titleStyle = "text-neutral-dark",
  descriptionStyle = "text-primary",
  titleText,
  descriptionText,
}) => {
  return (
      <div
        className={`card relative bg-neutral-light rounded-lg shadow-lg p-6 z-10 text-h3 flex items-center flex-col px-12 py-8 ${cardStyle}`}
      >
        <span className={`mb-1 ${titleStyle}`}>{titleText}</span> <br />{" "}
        <span className={`text-h1 text-[80px] ${descriptionStyle}`}>
          {descriptionText}
        </span>
      </div>
  );
};

export default Card;
