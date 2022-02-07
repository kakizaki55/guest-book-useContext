import React from 'react';
import GuestInputForm from '../../components/GuestInputForm/GuestInputForm';
import style from './Home.css';

export default function Home() {
  return (
    <>
      <div className={style.guestInputForm}>
        <GuestInputForm />
      </div>
    </>
  );
}
