import React from 'react';

import { githubUrl } from 'lib/constants';
import {useTheme} from "../../context/ThemeContext";

const Footer = () => {

  const { theme } = useTheme()

  return (
    <footer className={`text-center mt-auto ${theme.type === 'light' ? 'bg-light-mode-dark-color' : 'bg-dark-mode-light-bg'}`}>
      <nav>
        <ul className="my-2 mx-auto">
          <li className={`md:text-2xl text-xl ${theme.type === 'light' ? 'text-light-mode-light-color' : 'text-dark-mode-dark-text'}`}>
            Created with 💖 by <a href={githubUrl}>sprashanthv</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
