import { useState, createContext } from "react";

const AccuracyContext = createContext();

const AccuracyProvider = ({ children }) => {
  const [accuracy, setAccuracy] = useState(0);

  return (
    <AccuracyContext.Provider
      value={{
        accuracy,
        setAccuracy,
      }}
    >
      {children}
    </AccuracyContext.Provider>
  );
};

export { AccuracyProvider };
export default AccuracyContext;