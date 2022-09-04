import React, { useState } from 'react';
import styles from './contacts.module.scss';
import { ContactItem, Modal } from '..';

export function Contacts():JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className={styles.contacts}>
      <div className="container">
        <h1 className={styles.title}>Контакты</h1>
        <ul className={styles.contactsList}>
          <ContactItem onClick={() => setOpenModal(true)} />
        </ul>
      </div>
      {openModal && (
      <Modal onClose={() => setOpenModal(false)}>
        <p>Пара-пара-пам</p>
      </Modal>
      )}
    </section>
  );
}
