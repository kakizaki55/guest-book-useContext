import React from 'react';
import GuestEntriesList from '../../components/GuestEntriesList/GuestEntriesList';
import GuestInputForm from '../../components/GuestInputForm/GuestInputForm';
import { EntriesProvider } from '../../context/EntriesContext';
import style from './Home.css';

export default function Home() {
  return (
    <>
      <div className={style.home}>
        <EntriesProvider>
          <GuestEntriesList />
          <GuestInputForm />
        </EntriesProvider>
      </div>
    </>
  );
}
