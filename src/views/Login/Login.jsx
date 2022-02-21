import React from 'react';
import style from './Login.css';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, login, logout } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    console.log(user);
  };

  return (
    <div className={style.loginForm}>
      <form
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <label>
          Email :
          <input
            name="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Password :
          <input
            name="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button aria-label="login">Login</button>
      </form>
    </div>
  );
}
