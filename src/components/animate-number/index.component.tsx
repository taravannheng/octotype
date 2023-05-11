import { FC, useState, useEffect } from "react";

interface AnimateNumberProps {
  animateNumberStyle?: string;
  textStyle?: string;
  targetNumber: { number: number; text: string };
}

const AnimateNumber: FC<AnimateNumberProps> = ({
  animateNumberStyle = "",
  textStyle = "",
  targetNumber,
}) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  useEffect(() => {
    const numberInterval = setInterval(() => {
      setCurrentNumber((prevNumber) => prevNumber + 1);
    }, 6);

    if (currentNumber === targetNumber.number) {
      clearInterval(numberInterval);
    }

    return () => clearInterval(numberInterval);
  }, [currentNumber]);

  return (
    <div
      className={`animate-number flex justify-center items-center ${animateNumberStyle}`}
    >
      <span className={`${textStyle}`}>
        {currentNumber}
        {targetNumber.text}
      </span>
    </div>
  );
};

export default AnimateNumber;
