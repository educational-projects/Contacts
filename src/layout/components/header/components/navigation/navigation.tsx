import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuType } from '../../const';
import styles from './navigation.module.scss';

const setActiveLink = ({ isActive }: {isActive: boolean}): string => (isActive ? styles.activeLink : '');

export function Navigation(): JSX.Element {
  return (
    <nav>
      <ul className={styles.list}>
        {Object.values(MenuType).map(({ title, link }) => (
          <li
            key={title}
            className={styles.listItem}
          >
            <NavLink
              className={setActiveLink}
              to={link}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
