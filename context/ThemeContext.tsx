'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ITheme, ThemeContextType, ThemeProviderProps } from '../interfaces';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>({ type: 'light' });
  useEffect(() => {
    const initialTheme = localStorage.getItem('theme') != null ? localStorage.getItem('theme') : 'light';
    setTheme({ type: initialTheme });
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme.type);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevState) => {
      if (prevState.type === 'dark') {
        return { type: 'light' };
      }

      return { type: 'dark' };
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`mode__${theme.type}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
