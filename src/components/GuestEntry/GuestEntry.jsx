import React from 'react';
import style from './GuestEntry.css';
import { deleteEntryById } from '../../services/fetch';
import { useEntires } from '../../context/EntriesContext';

export default function ({ name, entry, id }) {
  const { setLoading } = useEntires();
  const handleDelete = (id) => {
    deleteEntryById(id);
    setLoading(true);
  };
  return (
    <>
      <div className={style.guestEntry}>
        <h3>{entry}</h3>
        <h6>-{name}</h6>
        <button onClick={() => handleDelete(id)}>delete</button>
      </div>
    </>
  );
}
