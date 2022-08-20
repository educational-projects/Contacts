import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PrivateRouteProps } from './private-route.pops';

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const location = useLocation();
  const auth = true;

  if (!auth) {
    return (
      <Navigate to="/login" state={{ from: location }} />
    );
  }

  return children;
}
