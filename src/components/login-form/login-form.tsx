import React from 'react';
import styles from './login-form.module.scss';

export function LoginForm(): JSX.Element {
  return (
    <form
      className={styles.form}
      action="#"
      method="post"
    >
      <div>
        <label className="visually-hidden" htmlFor="email">Емайл</label>
        <input className={styles.input} type="email" id="email" placeholder="Электронная почта" />
      </div>
      <div>
        <label className="visually-hidden" htmlFor="email">Пароль</label>
        <input className={styles.input} type="password" id="email" placeholder="Пароль" />
      </div>
      <button type="submit" className={styles.formButton}>Войти</button>
    </form>
  );
}
