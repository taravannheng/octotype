import { useState, createContext } from "react";

const WordCounterContext = createContext();

const WordCounterProvider = ({ children }) => {
  const [wordCounter, setWordCounter] = useState(0);

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