import React, { useEffect, useState } from 'react';
import styles from './contacts.module.scss';
import { ContactItem, Modal, AddContact } from '..';
import { useAppDispatch, useAppSelector } from '../../hook';
import { ReactComponent as AddIcon } from './Add.svg';
import { fetchContacts } from '../../store/contacts/contacts';

export function Contacts():JSX.Element {
  const dispatch = useAppDispatch();

  const [openModal, setOpenModal] = useState(false);
  const contacts = useAppSelector((state) => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={styles.contacts}>
      <div className="container">
        <h1 className={styles.title}>
          Контакты
          {' '}
          <button
            type="button"
            className={styles.newContact}
            aria-label="Добавить контакт"
            onClick={() => setOpenModal(true)}
          >
            <AddIcon width="30px" height="30px" />
          </button>
        </h1>
        <ul className={styles.contactsList}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
            />
          ))}
        </ul>
      </div>
      {openModal && (
      <Modal onClose={() => setOpenModal(false)}>
        <AddContact onClose={() => setOpenModal(false)} />
      </Modal>
      )}
    </section>
  );
}
