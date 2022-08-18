import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

export function Navigation(): JSX.Element {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            to="/"
          >
            Главная
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/contacts" className={styles.link}>
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
