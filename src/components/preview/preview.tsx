import React from 'react';
import styles from './preview.module.scss';

export function Preview(): JSX.Element {
  return (
    <section className={styles.preview}>
      <div className="container">
        <h1 className={styles.title}>
          Dmitry Tikhonov
          {' '}
          <span className={styles.subtitle}>frontend-developer</span>
        </h1>
      </div>
    </section>
  );
}
