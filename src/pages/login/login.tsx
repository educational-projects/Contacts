import React from 'react';
import { Link } from 'react-router-dom';
import { FormWrapper } from '../../components';
import styles from './login.module.scss';

function Login(): JSX.Element {
  return (
    <FormWrapper title="Авторизация">
      <div className={styles.loginWrapper}>
        <h2 className={styles.title}>Вход</h2>
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
        <div>
          <p>
            Нужна учетная запись?
            {' '}
            <Link
              className={styles.registrationLink}
              to="/register"
            >
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>
    </FormWrapper>
  );
}

export default Login;
