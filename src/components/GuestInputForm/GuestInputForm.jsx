import React from 'react';
import { useUser } from '../../context/UserContext';
import { useEntires } from '../../context/EntriesContext';
import style from './GuestInputForm.css';
import { useState } from 'react';

export default function GuestInputForm() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntires();

  const handleUpdating = () => {
    setUser(name);
    setEntries([
      ...entries,
      { name: name, entry: guestEntry, id: entries.length },
    ]);

    setGuestEntry('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdating();
  };
  const handleLogout = () => {
    setUser('');
    setName('');
  };

  return (
    <>
      <div>
        <form
          className={style.form}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {user ? null : (
            <label>
              Guest Name :
              <input
                value={name}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}

          <label>
            Entry :
            <textarea
              value={guestEntry}
              type="text"
              onChange={(e) => {
                setGuestEntry(e.target.value);
              }}
            />
          </label>
          <button>Sign</button>
          {user ? <button onClick={handleLogout}>not {user}?</button> : <></>}
        </form>
      </div>
    </>
  );
}
