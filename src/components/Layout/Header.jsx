import React from 'react';
import { useUser } from '../../context/UserContext';
import { useToggle } from '../../context/ToggleContext';

export default function Header() {
  const { user } = useUser();
  const { darkMode, toggle } = useToggle();
  console.log(darkMode);

  return (
    <>
      <div>welcome {user}</div>
      <button onClick={toggle}>
        {darkMode ? 'Toggled' : 'Click to Toggle'}
      </button>
    </>
  );
}
