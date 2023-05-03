import { FC, useState, useContext, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import CurrentLetterIndexContext from "../../contexts/current-letter-index-context";
import WordCounterContext from "../../contexts/word-counter-context";
import { isLetter } from "../../utils/helpers";

interface SpanProps {
  spanStyle: string;
  text: string;
  index: number;
  isLastLetter: boolean;
}

const Span: FC<SpanProps> = ({ spanStyle, text, index, isLastLetter }) => {
  const [wrongKeys, setWrongKeys] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const { currentLetterIndex, setCurrentLetterIndex } = useContext(
    CurrentLetterIndexContext
  );
  const { setWordCounter } = useContext(WordCounterContext);
  const spanRef = useRef<HTMLSpanElement>(null);

  // TODO: update the below event type to Keyboard Event
  const keyHandler = (event: any) => {
    const pressedKey = event.key;

    if (pressedKey === text) {
      setIsPressed(true);

      setCurrentLetterIndex(
        (prevCurrentLetterIndex: number) => prevCurrentLetterIndex + 1
      );

      // is last letter of the word -> update word counter
      if (isLastLetter) {
        setWordCounter((prevWordCounter: number) => prevWordCounter + 1);
      }

      spanRef.current!.blur();
    }

    if (pressedKey !== text) {
      // add wrong letters to the wrong letter array
      if (isLetter(pressedKey)) {
        const tempWrongKeys = [...wrongKeys, pressedKey];
        setWrongKeys(tempWrongKeys);
      }
    }
  };

  useEffect(() => {
    if (currentLetterIndex === index) {
      setIsActive(true);

      spanRef.current!.focus();
    }
  }, [currentLetterIndex, index]);

  return (
    <span
      onKeyDown={keyHandler}
      ref={spanRef}
      tabIndex={index}
      className={`outline-none ${spanStyle} ${
        isActive && "text-neutral-light"
      }  ${isPressed && "text-primary"}`}
    >
      {wrongKeys.map((key: string, index: number) => {
        return (
          <span key={uuidv4()} className="text-status-error">{key}</span>
        );
      })}
      {text}
    </span>
  );
};

export default Span;
