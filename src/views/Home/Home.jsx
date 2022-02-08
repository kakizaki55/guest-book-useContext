import React from 'react';
import GuestEntriesList from '../../components/GuestEntriesList/GuestEntriesList';
import GuestInputForm from '../../components/GuestInputForm/GuestInputForm';
import style from './Home.css';

export default function Home() {
  return (
    <>
      <div className={style.home}>
        <GuestEntriesList />
        <GuestInputForm />
      </div>
    </>
  );
}
