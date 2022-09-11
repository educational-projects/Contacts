import React from 'react';
import { AuthorizationStatus } from '../../../../../const';
import { useAppSelector } from '../../../../../hook';
import { Entrance } from '../entrance/entrance';
import { UserLink } from '../user-link/user-link';
import styles from './user.module.scss';

export function User(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  return (
    <div className={styles.user}>
      {authorizationStatus === AuthorizationStatus.Auth
        ? <UserLink />
        : <Entrance />}
    </div>
  );
}
