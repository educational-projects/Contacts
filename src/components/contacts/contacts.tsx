import React from 'react';
import styles from './contacts.module.scss';
import { ContactItem } from '..';

export function Contacts():JSX.Element {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <h1 className={styles.title}>Контакты</h1>
        <ul className={styles.contactsList}>
          <ContactItem />
        </ul>
      </div>
    </section>
  );
}
