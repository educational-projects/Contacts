import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

function Layout(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
