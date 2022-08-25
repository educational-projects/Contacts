import React from 'react';
import { RegistrationFormType } from './const';
import styles from './registration-form.module.scss';

export function RegistrationForm(): JSX.Element {
  return (
    <form
      className={styles.form}
      action="#"
      method="post"
    >
      {Object.values(RegistrationFormType).map(({
        label, id, type, placeholder,
      }) => (
        <div>
          <label className="visually-hidden" htmlFor={id}>{label}</label>
          <input className={styles.input} type={type} id={id} placeholder={placeholder} />
        </div>
      ))}
      <button type="submit" className={styles.formButton}>Войти</button>
    </form>
  );
}
