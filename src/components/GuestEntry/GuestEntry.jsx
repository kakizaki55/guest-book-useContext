import React from 'react';
import style from './GuestEntry.css';
import { deleteEntryById } from '../../services/fetch';
import { useEntires } from '../../context/EntriesContext';
import { useToggle } from '../../context/ToggleContext';

export default function ({ name, entry, id }) {
  const { setLoading } = useEntires();
  const { darkMode } = useToggle();
  const handleDelete = (id) => {
    deleteEntryById(id);
    setLoading(true);
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.guestEntry}>
        <h3>{entry}</h3>
        <h6>-{name}</h6>
      </div>
      <button
        onClick={() => handleDelete(id)}
        className={darkMode ? style.darkmode : null}
      >
        delete
      </button>
    </div>
  );
}
