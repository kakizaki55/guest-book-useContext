import React from 'react';
import style from './GuestInputForm.css';

export default function GuestInputForm() {
  return (
    <div>
      <form className={style.form}>
        <label>
          Guest Name :
          <input type="text" />
        </label>
        <label>
          Entry :
          <textarea type="text" />
        </label>
        <button>Sign</button>
      </form>
    </div>
  );
}
