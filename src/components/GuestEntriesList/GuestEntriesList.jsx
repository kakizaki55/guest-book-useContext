import React from 'react';
import { useEntires } from '../../context/EntriesContext';
import GuestEntry from '../GuestEntry/GuestEntry';
import style from './GuestEntriesList.css';

export default function GuestEntriesList() {
  const { entries } = useEntires();
  console.log(entries);
  return (
    <div className={style.guestEntriesList}>
      {entries.map((entry) => (
        <GuestEntry {...entry} />
      ))}
    </div>
  );
}
