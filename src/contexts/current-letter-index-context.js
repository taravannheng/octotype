import { useState, createContext } from "react";

const CurrentLetterIndexContext = createContext();

const CurrentLetterIndexContextProvider = ({ children }) => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  return (
    <CurrentLetterIndexContext.Provider
      value={{
        currentLetterIndex,
        setCurrentLetterIndex,
      }}
    >
      {children}
    </CurrentLetterIndexContext.Provider>
  );
};

export { CurrentLetterIndexContextProvider };
export default CurrentLetterIndexContext;