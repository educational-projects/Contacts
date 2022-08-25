import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormWrapperProps } from './form-wrapper.props';
import styles from './form-wrapper.module.scss';
import { AppRoute } from '../../const';

export function FormWrapper({ title, children }: FormWrapperProps): JSX.Element {
  const location = useLocation();

  const formTitle = location.pathname === AppRoute.Login ? 'Вход' : 'Создание аккаунта';
  const linkUrl = location.pathname === AppRoute.Login ? '/registration' : '/login';
  const pText = location.pathname === AppRoute.Login ? 'Нужна учетная запись?' : 'уже есть учетная запись?';
  const linkText = location.pathname === AppRoute.Login ? 'Зарегистрироваться' : 'Авторизоваться';

  return (
    <>
      <h1 className="visually-hidden">{title}</h1>
      <div className={styles.formWrapper}>
        <div className={styles.container}>
          <h2 className={styles.contentTitle}>{formTitle}</h2>
          <div>
            {children}
            <p>
              {pText}
              {' '}
              <Link
                className={styles.link}
                to={linkUrl}
              >
                {linkText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
