import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header>
      {theme.type}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
