import React from 'react';
import { Link } from 'react-router-dom';
import styles from './user-link.module.scss';

export function UserLink():JSX.Element {
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
          limestormrage@yandex.ru
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
