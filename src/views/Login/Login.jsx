import React from 'react';

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('handle login insde');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <label>
          Email :
          <input name="email" type="email" />
        </label>
        <label>
          Password :
          <input name="password" type="password" />
        </label>
        <button aria-label="login">Login</button>
      </form>
    </div>
  );
}
