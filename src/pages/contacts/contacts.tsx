import React, { useEffect } from 'react';
import { Contacts } from '../../components';
import { useAppDispatch } from '../../hook';
import { fetchContacts } from '../../store/contacts/contacts';

function ContactsPage(): JSX.Element {
  const dispatch = useAppDispatch();

  // Запрос контактов
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Contacts />
  );
}

export default ContactsPage;
