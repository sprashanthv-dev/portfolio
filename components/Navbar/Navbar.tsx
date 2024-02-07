import React, { useState } from 'react';

import useResizer from 'hooks/useResizer';
import { useTheme } from '../../context/ThemeContext';
import { navbarItems } from '../../lib/constants';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [closeIcon, setCloseIcon] = useState(false);

  const isResized = useResizer(768);

  const toggleCloseIcon = () => {
    setCloseIcon(!closeIcon);
  };

  return (
    <div className="flex items-center justify-between mt-8 w-full">
      <nav className="flex flex-col justify-center md:justify-between items-center w-4/5 md:flex-row">
        <ul className="flex flex-col text-center items-center md:justify-between cursor-pointer mt-2 md:m-0 md:w-3/4 md:flex-row lg:text-xl">
          {(!isResized || closeIcon) &&
            navbarItems.map((item) => (
              <li
                key={item.id}
                className="hover:underline underline-offset-8 decoration-4 "
              >
                {item.title}
              </li>
            ))}
        </ul>
      </nav>
      <div className="flex w-1/5 justify-evenly items-center m-0">
        {/* Theme Switcher Starts */}
        <img
          src={`images/${theme.type}_mode.svg`}
          alt="Theme Mode Icon"
          className="cursor-pointer"
          onClick={toggleTheme}
        />
        {/* Theme Switcher Ends */}

        {/* Hamburger Menu Starts*/}
        {isResized ? (
          closeIcon ? (
            <img
              src={`images/close_${theme.type}.svg`}
              alt="Close Menu Icon"
              onClick={toggleCloseIcon}
            />
          ) : (
            <img
              src={`images/menu_${theme.type}.svg`}
              alt="Hamburger Menu Icon"
              onClick={toggleCloseIcon}
            />
          )
        ) : (
          ''
        )}
        {/* Hamburger Menu Ends*/}
      </div>
    </div>
  );
};

export default Navbar;
