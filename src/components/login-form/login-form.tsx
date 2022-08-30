import React from 'react';
import { LoginFormType } from './const';
import styles from './login-form.module.scss';

export function LoginForm(): JSX.Element {
  return (
    <form
      className={styles.form}
      action="#"
      method="post"
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
