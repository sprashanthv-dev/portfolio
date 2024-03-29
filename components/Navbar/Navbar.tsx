import Link from "next/link";
import React, { useState } from "react";

import useResizer from "hooks/useResizer";
import { useTheme } from "../../context/ThemeContext";
import { navbarItems } from "../../lib/constants";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [closeIcon, setCloseIcon] = useState(false);

  const isResized = useResizer(768);

  const toggleCloseIcon = () => {
    setCloseIcon(!closeIcon);
  };

  // TODO: Sticky header
  // sticky top-0 z-50 border-4 border-light-mode-alt-color rounded p-4 sticky top-0 z-50
  return (
    <div className="flex items-center justify-between mt-8 w-full ">
      <nav className="flex flex-col justify-center md:justify-between items-center w-4/5 md:flex-row">
        <ul
          className="flex flex-col text-center items-center md:justify-between cursor-pointer mt-2 md:m-0 md:w-3/4 md:flex-row lg:text-xl">
          {(!isResized || closeIcon) &&
            navbarItems.map((item) => (
              <Link key={item.id} href={item.navigation}>
                <li
                  className="hover:underline underline-offset-8 decoration-4
                hover:scale-110 transform transition duration-y"
                >
                  {item.title}
                </li>
              </Link>
            ))}
        </ul>
      </nav>
      <div className="flex w-1/5 justify-evenly items-center m-0">
        {/* Theme Switcher Starts */}
        <img
          src={`images/${theme.type}_mode.svg`}
          alt="Theme Mode Icon"
          className="cursor-pointer hover:scale-150 transform transition duration-y"
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
          ""
        )}
        {/* Hamburger Menu Ends*/}
      </div>
    </div>
  );
};

export default Navbar;
