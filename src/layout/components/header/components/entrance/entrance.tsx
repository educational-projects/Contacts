import React from 'react';
import { Link } from 'react-router-dom';
import styles from './entrance.module.scss';
import { ReactComponent as UserIcon } from './unnamed-user.svg';

export function Entrance(): JSX.Element {
  return (
    <div className={styles.entranceWrapper}>
      <UserIcon
        className={styles.icon}
        width="30px"
        height="30px"
      />
      <Link
        className={styles.link}
        to="/login"
      >
        Войти
      </Link>
    </div>
  );
}
