import { unwrapResult } from '@reduxjs/toolkit';
import React, { FormEvent } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hook';
import { loginAction } from '../../store/user/user';
import { LoginFormType } from './const';
import styles from './login-form.module.scss';

interface LocationState {
  from: {
    pathname: string;
  };
}

export function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} replace />;
  }

  const { from } = location.state as LocationState || { from: { pathname: '/' } };
  const fromPage = from;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(loginAction({ email: 'admin@yandex.ru', password: '12345' }))
      .then(unwrapResult)
      .then(() => navigate(fromPage, { replace: true }));
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
          <input className={styles.input} type={type} id={id} placeholder={placeholder} required />
        </div>
      ))}
      <button type="submit" className={styles.formButton}>Войти</button>
    </form>
  );
}
