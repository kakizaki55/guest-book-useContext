import React from 'react';
import { useUser } from '../../context/UserContext';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();

  return (
    <Route {...routeProps}>{user ? children : <Redirect to="/login" />}</Route>
  );
}
