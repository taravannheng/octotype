import { useState, createContext } from "react";

import { INITIAL_CONFIG } from "../utils/constants";

const FirstKeyPressedContext = createContext();

const FirstKeyPressedProvider = ({ children }) => {
  const [isFirstKeyPressed, setIsFirstKeyPressed] = useState(INITIAL_CONFIG.FIRST_KEY_PRESSED);

  return (
    <FirstKeyPressedContext.Provider
      value={{
        isFirstKeyPressed,
        setIsFirstKeyPressed,
      }}
    >
      {children}
    </FirstKeyPressedContext.Provider>
  );
};

export { FirstKeyPressedProvider };
export default FirstKeyPressedContext;