import React from 'react';
import { useEntires } from '../../context/EntriesContext';
import GuestEntry from '../GuestEntry/GuestEntry';
import style from './GuestEntriesList.css';
import { v4 as uuidv4 } from 'uuid';

export default function GuestEntriesList() {
  const { entries } = useEntires();
  return (
    <div className={style.guestEntriesList}>
      {entries.map((entry) => (
        <GuestEntry {...entry} key={uuidv4()} />
      ))}
    </div>
  );
}
