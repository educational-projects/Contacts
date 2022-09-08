import React, { FormEvent, ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../hook';
import { sendNewContact } from '../../store/contacts/contacts';
import { Contact } from '../../types/contact';
import styles from './edit-contact.module.scss';

interface EditContactProps {
  contact: Contact;
  onClose: () => void;
}

export function EditContact({ onClose, contact }: EditContactProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState({
    name: contact.name,
    company: contact.company,
    phone: contact.phone,
  });

  const handleChangeForm = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(sendNewContact({ ...formState, callback: onClose }));
  };

  return (
    <form className={styles.form} action="#" method="post" onSubmit={handleSubmit}>
      <h2 className={styles.title}>Редактировать контакт</h2>
      <div>
        <label className="visually-hidden" htmlFor="name">Имя</label>
        <input className={styles.formInput} type="text" id="name" name="name" placeholder="Имя" onChange={handleChangeForm} value={formState.name} />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="company">Компания</label>
        <input className={styles.formInput} type="text" id="company" name="company" placeholder="Компания" onChange={handleChangeForm} value={formState.company} />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="phone">Телефон</label>
        <input className={styles.formInput} type="tel" id="phone" name="phone" placeholder="Телефон" onChange={handleChangeForm} value={formState.phone} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} type="submit">Подтвердить</button>
        <button className={styles.button} type="button" onClick={onClose}>Отменить</button>
      </div>
    </form>
  );
}
