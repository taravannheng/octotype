import { useState, createContext } from "react";

const CurrentLetterIndexContext = createContext();

const CurrentLetterIndexContextProvider = ({ children }) => {
  const [currentLetterIndexState, setCurrentLetterIndexState] = useState(0);

  return (
    <CurrentLetterIndexContext.Provider
      value={{
        currentLetterIndexState,
        setCurrentLetterIndexState,
      }}
    >
      {children}
    </CurrentLetterIndexContext.Provider>
  );
};

export { CurrentLetterIndexContextProvider };
export default CurrentLetterIndexContext;