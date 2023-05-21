import { FC, useState, useContext, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import CurrentLetterIndexContext from "../../contexts/current-letter-index-context";
import WordCounterContext from "../../contexts/word-counter-context";
import ThemeContext from "../../contexts/theme-context";
import TimerContext from "../../contexts/timer-context";
import TotalLetterTypedContext from "../../contexts/total-letter-typed";
import FirstKeyPressedContext from "../../contexts/first-key-pressed-context";

import { isLetter } from "../../utils/helpers";

interface SpanProps {
  spanStyle?: string;
  text: string;
  index: number;
  isLastLetter: boolean;
}

const Span: FC<SpanProps> = ({ spanStyle, text, index, isLastLetter }) => {
  const [wrongKeys, setWrongKeys] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [activeLetterColor, setActiveLetterColor] = useState<string>("text-dark-white");
  const { currentLetterIndex, setCurrentLetterIndex } = useContext(
    CurrentLetterIndexContext
  );
  const { isFirstKeyPressed, setIsFirstKeyPressed } = useContext(
    FirstKeyPressedContext
  );
  const { isDarkTheme } = useContext(ThemeContext);
  const { setTotalLetterTyped } = useContext(TotalLetterTypedContext);
  const { timer } = useContext(TimerContext);
  const { setWordCounter } = useContext(WordCounterContext);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // TODO: update the below event type to Keyboard Event
  const keyHandler = (event: any) => {
    const pressedKey = event.key;

    setTotalLetterTyped(
      (prevTotalLetterTyped: number) => prevTotalLetterTyped + 1
    );

    if (pressedKey === text) {
      setIsPressed(true);

      if (currentLetterIndex === 0) {
        setIsFirstKeyPressed(true);
      }

      setCurrentLetterIndex(
        (prevCurrentLetterIndex: number) => prevCurrentLetterIndex + 1
      );

      // is last letter of the word -> update word counter
      if (isLastLetter) {
        setWordCounter((prevWordCounter: number) => prevWordCounter + 1);
      }

      setIsActive(false);
      spanRef.current!.blur();
    }

    if (pressedKey !== text) {
      // add wrong letters to the wrong letter array
      if (isLetter(pressedKey) && pressedKey !== " ") {
        const tempWrongKeys = [...wrongKeys, pressedKey];
        setWrongKeys(tempWrongKeys);
      }

      // if backspace -> remove the last wrong key from the array
      if (pressedKey.toString() === 'Backspace') {
        setWrongKeys(prevWrongKeys => [...prevWrongKeys.slice(0, -1)])
      }
    }
  };

  useEffect(() => {
    if (currentLetterIndex === index) {
      setIsActive(true);

      inputRef.current!.focus();

      if (timer !== 0) {
        spanRef.current!.focus();
      }
    }
  }, [currentLetterIndex, index, timer, wrongKeys]);

  useEffect(() => {
    if (isDarkTheme) {
      setActiveLetterColor('text-dark-white');
    }

    if (!isDarkTheme) {
      setActiveLetterColor('!text-light-dark');
    }
  }, [isDarkTheme, setActiveLetterColor]);

  return (
    <span
      onKeyDown={keyHandler}
      ref={spanRef}
      tabIndex={index}
      className={`relative outline-none pointer-events-none ${isDarkTheme ? 'text-dark-light' : 'text-light-medium'} ${spanStyle} ${
        (isActive && !isPressed) && activeLetterColor
      }  ${isPressed && "text-light-primary text-dark-primary"}`}
    >
      {wrongKeys.map((key: string, index: number) => {
        if (index < 10) {
          return (
            <span
              key={uuidv4()}
              className="pointer-events-none text-dark-status-error"
            >
              {key}
            </span>
          );
        }
      })}
      <span className="relative mr-[2px] overflow-hidden">
        {(isActive && !isPressed) && <span
          className={`absolute top-0 left-[-4px] w-1 h-7 pt-2 rounded-full animate-fast-blink ${isDarkTheme ? 'bg-dark-white' : 'bg-light-dark'}`}
        ></span>}
        {text}
      </span>
      <input type="text" ref={inputRef} onChange={keyHandler} className="hidden" />
    </span>
  );
};

export default Span;
