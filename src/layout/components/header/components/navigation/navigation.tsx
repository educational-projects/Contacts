import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

const setActiveLink = ({ isActive }: {isActive: boolean}): string => (isActive ? styles.activeLink : '');

export function Navigation(): JSX.Element {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            className={setActiveLink}
            to="/"
          >
            Главная
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            className={setActiveLink}
            to="/contacts"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
