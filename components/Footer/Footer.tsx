import React from 'react';

import { githubUrl } from 'lib/constants';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <nav className={styles.Footer__nav}>
        <ul className={styles.Footer__nav__items}>
          <li className={styles.Footer__nav__item}>
            Created with 💖 by <a href={githubUrl}>sprashanthv</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
