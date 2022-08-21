import React from 'react';
import { Entrance } from '../entrance/entrance';
import { UserLink } from '../user-link/user-link';
import styles from './user.module.scss';

export function User(): JSX.Element {
  const auth = false;

  return (
    <div className={styles.user}>
      {auth
        ? <UserLink />
        : <Entrance />}
    </div>
  );
}
