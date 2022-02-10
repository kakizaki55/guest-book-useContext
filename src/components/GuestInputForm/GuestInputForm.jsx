import React from 'react';
import { useUser } from '../../context/UserContext';
import { useEntires } from '../../context/EntriesContext';
import style from './GuestInputForm.css';
import { useState } from 'react';
import { updateEntryList } from '../../services/fetch';
import { useToggle } from '../../context/ToggleContext';
import { useAnimation } from '../../hooks/Animation';
import { Ball } from '../Ball/Ball';

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

  const animation1 = useAnimation('elastic', 2000, 0);
  const animation2 = useAnimation('elastic', 2000, 150);
  const animation3 = useAnimation('elastic', 2000, 300);

  return (
    <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Ball
            innerStyle={{
              marginTop: animation1 * 200 - 100,
            }}
          />
          <Ball
            innerStyle={{
              marginTop: animation2 * 200 - 100,
            }}
          />
          <Ball
            innerStyle={{
              marginTop: animation3 * 200 - 100,
            }}
          />
        </div>
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
                required
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
              required
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
