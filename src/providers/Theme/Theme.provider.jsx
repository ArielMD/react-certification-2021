import React, { useState, useContext, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../utils/themes';

const ThemeContext = React.createContext(null);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without an HOCThemeProvider!`);
  }
  const { toggleTheme, isDarkMode } = context;

  return { toggleTheme, isDarkMode };
};

const HOCThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevState) => !prevState);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={isDarkMode ? dark : light}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { useTheme };
export default HOCThemeProvider;
