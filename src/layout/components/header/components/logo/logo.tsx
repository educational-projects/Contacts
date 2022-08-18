import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from './logo.svg';
import styles from './logo.module.scss';

export function Logo(): JSX.Element {
  return (
    <Link
      className={styles.link}
      to="/"
    >
      <LogoIcon
        className={styles.logo}
        width="50px"
        height="50px"
      />
    </Link>
  );
}
