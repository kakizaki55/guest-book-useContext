import React from 'react';
import Home from '../Home/Home';
import Header from '../../components/Layout/Header';
import { useToggle } from '../../context/ToggleContext';
import style from './Layout.css';

export default function Layout() {
  const { darkMode } = useToggle();
  return (
    <div className={darkMode ? style.darkmode : null}>
      <Header />
      <Home />
      <footer>Hope you had a good week!</footer>
    </div>
  );
}
