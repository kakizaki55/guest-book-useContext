import { useState, createContext, useContext, useMemo, useEffect } from 'react';
import { fetchEntryList } from '../services/fetch';

const EntriesContext = createContext();

export const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEntryList();
      console.log(data);
      setEntries(data);
    };
    fetchData();
  }, []);
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
    throw new Error('useEntries must be warped in a EntriesProvider component');
  }

  return entries;
};
