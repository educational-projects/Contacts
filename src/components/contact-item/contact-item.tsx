import React from 'react';
import styles from './contact-item.module.scss';
import { ReactComponent as DeleteIcon } from './Delete.svg';
import { ReactComponent as EditIcon } from './Edit.svg';
import { ReactComponent as AddIcon } from './Add.svg';
import { ReactComponent as PhoneIcon } from './Phone.svg';

export function ContactItem(): JSX.Element {
  return (
    <li className={styles.userItem}>
      <div className={styles.userContent}>
        <div className={styles.userInfo}>
          <p className={styles.userName}>Дмитрий Тихонов</p>
          <p>Ситилинк</p>
        </div>
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.button}
            aria-label="Добавить контакт"
          >
            <AddIcon width="30px" height="30px" />
          </button>
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
        href="tel:89535346291"
      >
        <PhoneIcon
          className={styles.phoneIcon}
          width="15px"
          height="15px"
        />
        89535346291
      </a>
    </li>
  );
}
