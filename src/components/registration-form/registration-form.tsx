import React, { FormEvent, useState, ChangeEvent } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hook';
import { registerAction } from '../../store/user/user';
import { RegistrationFormType } from './const';
import styles from './registration-form.module.scss';
import { AppRoute } from '../../const';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export function RegistrationForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(registerAction(formState))
      .then(unwrapResult)
      .then(() => navigate(AppRoute.Main));
  };

  const handleChangeForm = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = target;

    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <form
      className={styles.form}
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      {Object.values(RegistrationFormType).map(({
        label, id, type, placeholder,
      }) => (
        <div key={id}>
          <label className="visually-hidden" htmlFor={id}>{label}</label>
          <input
            className={styles.input}
            type={type}
            id={id}
            onChange={handleChangeForm}
            placeholder={placeholder}
          />
        </div>
      ))}
      <button type="submit" className={styles.formButton}>Зарегистрироваться</button>
    </form>
  );
}
