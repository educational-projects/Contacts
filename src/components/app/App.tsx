import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { PrivateRoute } from '../../hoc/private-route/private-route';
import Layout from '../../layout/layout';
import ContactsPage from '../../pages/contacts/contacts';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Registration from '../../pages/registration/registration';
import './App.scss';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path={AppRoute.Contacts}
            element={(
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
          )}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Registration} element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
