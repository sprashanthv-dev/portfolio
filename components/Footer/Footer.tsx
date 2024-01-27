import React from 'react';

import { githubUrl } from 'lib/constants';

const Footer = () => {
  return (
    <footer className="text-center bg-footer-bg mt-auto">
      <nav>
        <ul className="my-2 mx-auto">
          <li className="md:text-2xl text-xl">
            Created with 💖 by <a href={githubUrl}>sprashanthv</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
