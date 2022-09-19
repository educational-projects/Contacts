import React from 'react';
import { Contacts, SearchForm } from '../../components';
import styles from './contacts.module.scss';

function ContactsPage(): JSX.Element {
  return (
    <>
      <h1 className={styles.title}>Контакты</h1>
      <SearchForm />
      <Contacts />
    </>
  );
}

export default ContactsPage;
