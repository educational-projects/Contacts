import React, { FormEvent, ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../hook';
import { sendNewContact } from '../../store/contacts/contacts';
import styles from './add-contact.module.scss';

interface AddContactProps {
  onClose: () => void;
}

const initialState = {
  name: '',
  company: '',
  phone: '',
};

export function AddContact({ onClose }: AddContactProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState(initialState);

  const handleChangeForm = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    console.log('forma otpravlena');
    dispatch(sendNewContact(formState));
  };
  return (
    <form className={styles.form} action="#" method="post" onSubmit={handleSubmit}>
      <h2 className={styles.title}>Добавить новый контакт</h2>
      <div>
        <label className="visually-hidden" htmlFor="name">Имя</label>
        <input className={styles.formInput} type="text" id="name" name="name" placeholder="Имя" onChange={handleChangeForm} value={formState.name} />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="company">Компания</label>
        <input className={styles.formInput} type="text" id="company" name="company" placeholder="Компания" onChange={handleChangeForm} />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="phone">Телефон</label>
        <input className={styles.formInput} type="tel" id="phone" name="phone" placeholder="Телефон" onChange={handleChangeForm} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} type="submit">Добавить</button>
        <button className={styles.button} type="button" onClick={onClose}>Отменить</button>
      </div>
    </form>
  );
}
