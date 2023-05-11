import { useState, createContext } from "react";

import { INITIAL_CONFIG } from "../utils/constants";

const ThemeContext = createContext();

let isDarkThemeInitial = INITIAL_CONFIG.IS_DARK_THEME;
const isDarkThemeSessionStorage = sessionStorage.getItem("isDarkTheme");

if (isDarkThemeSessionStorage !== null) {
  if (isDarkThemeSessionStorage === "true") {
    isDarkThemeInitial = true;
  } else {
    isDarkThemeInitial = false;
  }
}

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeInitial);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;