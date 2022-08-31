import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hook';
import { fetchContacts } from '../../store/contacts/contacts';

function Contacts(): JSX.Element {
  const dispatch = useAppDispatch();

  // Запрос контактов
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <h1>Контакты</h1>
  );
}

export default Contacts;
