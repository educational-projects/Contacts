import React from 'react';
import styles from './layout.module.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { LayoutProps } from './layout.props';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
