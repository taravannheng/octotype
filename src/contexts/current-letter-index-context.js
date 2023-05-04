import { useState, createContext } from "react";

import { INITIAL_CONFIG } from "../utils/constants";

const CurrentLetterIndexContext = createContext();

const CurrentLetterIndexContextProvider = ({ children }) => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(INITIAL_CONFIG.CURRENT_LETTER_INDEX);

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