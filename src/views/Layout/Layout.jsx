import React from 'react';
import Home from '../Home/Home';
import Header from '../../components/Layout/Header';
import { useToggle } from '../../context/ToggleContext';
import style from './Layout.css';
import Login from '../Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

export default function Layout() {
  const { darkMode } = useToggle();
  return (
    <div className={darkMode ? style.darkmode : null}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      <footer>Hope you had a good week!</footer>
    </div>
  );
}
