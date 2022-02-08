import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  console.log(user);
  return <div>welcome {user}</div>;
}
