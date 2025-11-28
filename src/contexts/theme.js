import { createContext, useContext } from 'react';

const initValue = {
  theme: 'light',
  toggleTheme: () => {},
};

const ThemeContext = createContext(initValue);

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeContext, useTheme };
