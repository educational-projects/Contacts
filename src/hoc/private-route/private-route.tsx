import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hook';
import { PrivateRouteProps } from './private-route.pops';

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const location = useLocation();
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <Navigate to="/login" state={{ from: location }} />
    );
  }

  return children;
}
