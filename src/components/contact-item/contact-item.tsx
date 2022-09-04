import React from 'react';
import styles from './contact-item.module.scss';
import { ReactComponent as DeleteIcon } from './Delete.svg';
import { ReactComponent as EditIcon } from './Edit.svg';
import { ReactComponent as PhoneIcon } from './Phone.svg';
import { Contact } from '../../types/contact';

interface ContactItemProps {
  contact: Contact;
}

export function ContactItem({ contact }: ContactItemProps): JSX.Element {
  const {
    name, company, phone,
  } = contact;
  return (
    <li className={styles.userItem}>
      <div className={styles.userContent}>
        <div className={styles.userInfo}>
          <p className={styles.userName}>{name}</p>
          <p>{company}</p>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            type="button"
            aria-label="Редактировать контакт"
          >
            <EditIcon width="30px" height="30px" />
          </button>
          <button
            type="button"
            className={styles.button}
            aria-label="Удалить контакт"
          >
            <DeleteIcon width="30px" height="30px" />
          </button>
        </div>
      </div>
      <a
        className={styles.userTel}
        href={`tel:${phone}`}
      >
        <PhoneIcon
          className={styles.phoneIcon}
          width="15px"
          height="15px"
        />
        {phone}
      </a>
    </li>
  );
}
