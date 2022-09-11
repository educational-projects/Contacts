import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../../hook';
import styles from './user-link.module.scss';

export function UserLink():JSX.Element {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className={styles.userLink}>
      <div className={styles.user}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            width="30px"
            height="30px"
            src="https://8.react.pages.academy/static/avatar/4.jpg"
            alt="Фотография пользователя"
          />
        </div>
        <Link
          className={styles.link}
          to="/#"
        >
          {user?.name}
        </Link>
      </div>
      <Link
        className={styles.link}
        to="/#"
      >
        Выйти
      </Link>
    </div>
  );
}
