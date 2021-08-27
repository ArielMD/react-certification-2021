import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../utils/themes';

const ThemeContext = React.createContext(null);

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

export { ThemeContext, HOCThemeProvider as default };
