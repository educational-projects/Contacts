import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Contacts, SearchForm } from '../../components';
import { APIQuery } from '../../const';
import { useAppDispatch } from '../../hook';
import { fetchContacts } from '../../store/contacts/contacts';
import styles from './contacts.module.scss';

function ContactsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearch, setIsSearch] = useState(false);
  const searchQuery = searchParams.get(APIQuery.FullText) || '';

  // устанавливаем состояние поиска
  useEffect(() => {
    if (searchQuery) {
      return setIsSearch(true);
    }

    return setIsSearch(false);
  }, [searchQuery]);

  // получаем либо все контакты, либо поиск
  useEffect(() => {
    dispatch(fetchContacts({
      [APIQuery.FullText]: searchQuery,
    }));
  }, [dispatch, searchQuery]);

  return (
    <>
      <h1 className={styles.title}>Контакты</h1>
      <SearchForm
        searchQuery={searchQuery}
        setSearchParams={setSearchParams}
      />
      <Contacts isSearch={isSearch} />
    </>
  );
}

export default ContactsPage;
