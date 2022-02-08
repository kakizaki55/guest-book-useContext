import { useState, createContext, useContext } from 'react';

const EntriesContext = createContext();

export const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const providerValue = { entries, setEntries };
  return (
    <EntriesContext.Provider value={providerValue}>
      {children}
    </EntriesContext.Provider>
  );
};

export const useEntires = () => {
  const entries = useContext(EntriesContext);
  if (entries === 'undefined') {
    throw new Error(
      ' useEntries must be warped in a EntriesProvider component'
    );
  }

  return entries;
};
