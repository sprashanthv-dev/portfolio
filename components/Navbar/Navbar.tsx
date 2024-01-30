import React from 'react';
import { useTheme } from '../../context/ThemeContext';

import { navbarItems } from '../../lib/constants';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between mt-5 w-full">
      <nav className="flex justify-between items-center md:w-4/5 w-5/5">
        <ul className="text-2xl md:w-2/4 md:text-lg lg:text-xl">
          <li>Prashanth Srinivasan</li>
        </ul>
        <ul className="hidden items-center space-x-6 cursor-pointer md:w-3/4 lg:text-xl md:flex">
          {navbarItems.map((item) => (
            <li
              key={item.id}
              className="hover:underline underline-offset-8 decoration-4 "
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex w-1/5 justify-evenly items-center">
        {/* Theme Switcher Starts */}
        <img
          src={theme.type == 'light' ? 'images/light.svg' : 'images/dark.svg'}
          alt="Theme Mode Icon"
          className={`cursor-pointer ${
            theme.type == 'dark' ? 'invert' : 'invert-0'
          }`}
          onClick={toggleTheme}
        />
        {/* Theme Switcher Ends */}

        {/* Hamburger Menu Starts*/}
        <img
          className="md:hidden"
          src="images/menu.svg"
          alt="Hamburger Menu Icon"
        />
        {/* Hamburger Menu Ends*/}
      </div>
    </div>
  );
};

export default Navbar;
