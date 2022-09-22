import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Contacts, SearchForm } from '../../components';
import { APIQuery } from '../../const';
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
