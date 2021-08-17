import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../utils/themes';

export const ThemeContext = React.createContext(null);

const HOCThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [search, setSearch] = useState('');

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevState) => !prevState);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode, search, setSearch }}>
      <ThemeProvider theme={isDarkMode ? dark : light}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default HOCThemeProvider;
