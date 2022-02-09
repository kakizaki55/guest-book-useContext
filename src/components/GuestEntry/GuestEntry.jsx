import React from 'react';
import style from './GuestEntry.css';

export default function ({ name, entry }) {
  return (
    <>
      <div className={style.guestEntry}>
        <h3>{entry}</h3>
        <h6>-{name}</h6>
      </div>
    </>
  );
}
