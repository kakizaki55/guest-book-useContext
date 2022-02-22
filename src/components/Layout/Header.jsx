import React from 'react';
import { useUser } from '../../context/UserContext';
import { useToggle } from '../../context/ToggleContext';
import style from './Header.css';

export default function Header() {
  const { user } = useUser();
  const { darkMode, toggle } = useToggle();

  return (
    <div className={style.header}>
      <div>welcome {user}</div>
      <button onClick={toggle} className={darkMode ? style.darkmode : null}>
        {darkMode ? 'LightMode' : 'Dark Made'}
      </button>
    </div>
  );
}
