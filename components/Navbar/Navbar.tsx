import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  {
    theme.type;
  }
  <button onClick={toggleTheme}>Toggle Theme</button>;

  return (
    <nav className="flex justify-between items-center mt-5">
      <ul className="md:text-xl lg:text-2xl cursor-pointer">
        <li>Prashanth Srinivasan</li>
      </ul>
      <ul className="flex items-center space-x-6 md:text-base lg:text-xl cursor-pointer">
        <li>About</li>
        <li>Experience</li>
        <li>Education</li>
        <li>Projects</li>
        <li>Interests</li>
        <li>
          <img
            src={theme.type == 'light' ? 'images/light.svg' : 'images/dark.svg'}
            alt="Theme Mode Icon"
            className={theme.type == 'dark' ? 'invert' : 'invert-0'}
            onClick={toggleTheme}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
