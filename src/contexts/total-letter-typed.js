import { useState, createContext } from "react";

import { INITIAL_CONFIG } from "../utils/constants";

const TotalLetterTypedContext = createContext();

const TotalLetterTypedProvider = ({ children }) => {
  const [totalLetterTyped, setTotalLetterTyped] = useState(INITIAL_CONFIG.TOTAL_LETTER_TYPED);

  return (
    <TotalLetterTypedContext.Provider
      value={{
        totalLetterTyped,
        setTotalLetterTyped,
      }}
    >
      {children}
    </TotalLetterTypedContext.Provider>
  );
};

export { TotalLetterTypedProvider };
export default TotalLetterTypedContext;