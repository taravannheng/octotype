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
        className={`card overflow-hidden relative bg-neutral-grey-4 rounded-lg shadow-lg6 z-10 text-h3 flex items-center flex-col justify-center min-w-[320px] w-[320px] max-w-[320px] min-h-[240px] h-[240px] max-h-[240px] ${cardStyle}`}
      >
        <span className={`mb-6 ${titleStyle}`}>{titleText}</span>{" "}
        <span className={`text-h1 text-[80px] max-w-full truncate ${descriptionStyle}`}>
          {descriptionText}
        </span>
      </div>
  );
};

export default Card;
