import { useContext } from 'react';
import { ThemeContext } from '../../../providers/Theme';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without an HOCThemeProvider!`);
  }
  const { toggleTheme, isDarkMode, search, setSearch } = context;

  return { toggleTheme, isDarkMode, search, setSearch };
};

export default useTheme;
