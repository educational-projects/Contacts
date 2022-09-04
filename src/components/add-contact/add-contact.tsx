import React from 'react';
import styles from './add-contact.module.scss';

interface AddContactProps {
  onClose: () => void;
}

export function AddContact({ onClose }: AddContactProps): JSX.Element {
  return (
    <form className={styles.form} action="#" method="post">
      <h2 className={styles.title}>Добавить новый контакт</h2>
      <div>
        <label className="visually-hidden" htmlFor="name">Имя</label>
        <input className={styles.formInput} type="text" id="name" placeholder="Имя" />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="name">Компания</label>
        <input className={styles.formInput} type="text" id="name" placeholder="Компания" />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="name">Телефон</label>
        <input className={styles.formInput} type="tel" id="name" placeholder="Телефон" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} type="submit">Добавить</button>
        <button className={styles.button} type="button" onClick={onClose}>Отменить</button>
      </div>
    </form>
  );
}
