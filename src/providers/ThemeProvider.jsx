import { useCallback, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme';
import useLocalStorage from '../hooks/useLocalStorage';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = useCallback(
    (value) => {
      setTheme(value ? 'dark' : 'light');
    },
    [setTheme]
  );

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
