import { FC, useContext } from "react";

import WordCounterContext from "../../contexts/word-counter-context";
import ThemeContext from "../../contexts/theme-context";

interface WordCounterProps {
  wordCounterStyle?: string;
  wordCounterTextStyle?: string;
}

const WordCounter: FC<WordCounterProps> = ({
  wordCounterStyle,
  wordCounterTextStyle,
}) => {
  const { wordCounter } = useContext(WordCounterContext);
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <p className={`word-counter text-h5 ${isDarkTheme ? 'text-dark-white' : 'text-light-darkest'} ${wordCounterStyle}`}>
      WORD COUNT:{" "}
      <span className={`word-counter__text ${wordCounterTextStyle}`}>
        {wordCounter}
      </span>
    </p>
  );
};

export default WordCounter;
