import { useState, createContext } from "react";

const TotalLetterTypedContext = createContext();

const TotalLetterTypedProvider = ({ children }) => {
  const [totalLetterTyped, setTotalLetterTyped] = useState(0);

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