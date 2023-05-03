import { useState, createContext } from "react";

const INITIAL_TIMER_VALUE = 60; // value is in seconds
const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(INITIAL_TIMER_VALUE);

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