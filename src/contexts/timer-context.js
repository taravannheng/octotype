import { useState, createContext } from "react";

import { INITIAL_CONFIG } from "../utils/constants";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(INITIAL_CONFIG.TIMER);

  return (
    <TimerContext.Provider
      value={{
        timer,
        setTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerProvider };
export default TimerContext;