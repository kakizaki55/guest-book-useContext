import React from 'react';
import { useUser } from '../../context/UserContext';
import { useEntires } from '../../context/EntriesContext';
import style from './GuestInputForm.css';
import { useState } from 'react';
import { updateEntryList } from '../../services/fetch';
import { useToggle } from '../../context/ToggleContext';

export default function GuestInputForm() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntires();

  const { darkMode } = useToggle();

  const handleUpdating = () => {
    setUser(name);
    setEntries([...entries, { name: name, entry: guestEntry }]);

    setGuestEntry('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdating();
    const newEntry = { name: name, entry: guestEntry };
    updateEntryList(newEntry);
  };
  const handleLogout = () => {
    setUser('');
    setName('');
  };

  return (
    <>
      <div>
        <h1>Leave a comment about your week!</h1>
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
          <button className={darkMode ? style.darkmode : null}>Sign</button>
          {user ? (
            <button
              onClick={handleLogout}
              className={darkMode ? style.darkmode : null}
            >
              not {user}?
            </button>
          ) : (
            <></>
          )}
        </form>
      </div>
    </>
  );
}
