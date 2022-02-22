import React from 'react';
import { useUser } from '../../context/UserContext';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();
  const location = useLocation();

  return (
    <Route {...routeProps}>
      {user ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: location.pathname }} />
      )}
    </Route>
  );
}
