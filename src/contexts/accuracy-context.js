import { useState, createContext } from "react";

import { INITIAL_CONFIG } from "../utils/constants";

const AccuracyContext = createContext();

const AccuracyProvider = ({ children }) => {
  const [accuracy, setAccuracy] = useState(INITIAL_CONFIG.ACCURACY);

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