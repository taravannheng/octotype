import { useState, createContext } from "react";

import { INITIAL_CONFIG } from "../utils/constants";

const WordCounterContext = createContext();

const WordCounterProvider = ({ children }) => {
  const [wordCounter, setWordCounter] = useState(INITIAL_CONFIG.WORD_COUNTER);

  return (
    <WordCounterContext.Provider
      value={{
        wordCounter,
        setWordCounter,
      }}
    >
      {children}
    </WordCounterContext.Provider>
  );
};

export { WordCounterProvider };
export default WordCounterContext;