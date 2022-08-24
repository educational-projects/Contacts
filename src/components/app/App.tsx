import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../../hoc/private-route/private-route';
import Layout from '../../layout/layout';
import Contacts from '../../pages/contacts/contacts';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import './App.scss';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path="contacts"
            element={(
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
          )}
          />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
