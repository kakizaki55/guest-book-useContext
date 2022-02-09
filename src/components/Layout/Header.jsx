import React from 'react';
import { useUser } from '../../context/UserContext';
import { useToggle } from '../../hooks/Toggle';

export default function Header() {
  const { user } = useUser();
  const [isTextChanged, setIsTextChanged] = useToggle();
  console.log(isTextChanged);
  return (
    <>
      <div>welcome {user}</div>
      <button onClick={setIsTextChanged}>
        {isTextChanged ? 'dayMode' : 'darkMode'}
      </button>
    </>
  );
}
