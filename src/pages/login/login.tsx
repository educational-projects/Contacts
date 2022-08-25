import React from 'react';
import { FormWrapper, LoginForm } from '../../components';

function Login(): JSX.Element {
  return (
    <FormWrapper title="Авторизация">
      <LoginForm />
    </FormWrapper>
  );
}

export default Login;
