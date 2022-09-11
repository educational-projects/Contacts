import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../../hook';
import { logout } from '../../../../../store/user/user';
import styles from './user-link.module.scss';

export function UserLink():JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleClick = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    dispatch(logout());
  };

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
        onClick={handleClick}
        className={styles.link}
        to={AppRoute.Main}
      >
        Выйти
      </Link>
    </div>
  );
}
