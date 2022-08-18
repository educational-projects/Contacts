import React from 'react';
import cn from 'classnames';
import { Logo, Navigation } from './components';
import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={cn('container', styles.wrapper)}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
