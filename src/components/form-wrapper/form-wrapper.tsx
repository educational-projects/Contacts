import React from 'react';
import { Link } from 'react-router-dom';
import { FormWrapperProps } from './form-wrapper.props';
import styles from './form-wrapper.module.scss';

export function FormWrapper({ title, children }: FormWrapperProps): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">{title}</h1>
      <div className={styles.formWrapper}>
        <div className={styles.container}>
          {title === 'Авторизация' && <h2 className={styles.contentTitle}>Вход</h2>}
          {title === 'Регистрация' && <h2 className={styles.contentTitle}>Создание аккаунта</h2>}
          <div>
            {children}
            {title === 'Авторизация' && (
            <p>
              Нужна учетная запись?
              {' '}
              <Link
                className={styles.link}
                to="/register"
              >
                Зарегистрироваться
              </Link>
            </p>
            )}
            {title === 'Регистрация' && (
            <p>
              Есть учетная запись?
              {' '}
              <Link
                className={styles.link}
                to="/login"
              >
                Войдите
              </Link>
            </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
