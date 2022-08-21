import React from 'react';
import { UserLink } from '../user-link/user-link';
import styles from './user.module.scss';

export function User(): JSX.Element {
  const auth = true;

  return (
    <div className={styles.user}>
      {auth
        ? <UserLink />
        : <p>no auth</p>}
    </div>
  );
}
