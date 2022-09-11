import React, { FormEvent } from 'react';
import { useAppDispatch } from '../../hook';
import { loginAction } from '../../store/user/user';
import { LoginFormType } from './const';
import styles from './login-form.module.scss';

export function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(loginAction({ email: 'admin@yandex.ru', password: '12345' }));
  };

  return (
    <form
      className={styles.form}
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      {Object.values(LoginFormType).map(({
        label, id, type, placeholder,
      }) => (
        <div key={id}>
          <label className="visually-hidden" htmlFor={id}>{label}</label>
          <input className={styles.input} type={type} id={id} placeholder={placeholder} />
        </div>
      ))}
      <button type="submit" className={styles.formButton}>Войти</button>
    </form>
  );
}
