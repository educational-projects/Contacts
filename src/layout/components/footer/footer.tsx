import React from 'react';
import styles from './footer.module.scss';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.copyright}>
          <p>
            ©
            {' '}
            {currentYear}
            {' '}
            limestormrage
          </p>
        </div>
      </div>
    </footer>
  );
}
