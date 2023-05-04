import { useState, createContext } from "react";

const FirstKeyPressedContext = createContext();

const FirstKeyPressedProvider = ({ children }) => {
  const [isFirstKeyPressed, setIsFirstKeyPressed] = useState(false);

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