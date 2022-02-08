import { useState, createContext, useContext } from 'react';

const EntriesContext = createContext();

export const EntriesProvider = ({ children }) => {
  const [entires, setEntires] = useState([]);

  const providerValue = { entires, setEntires };
  return (
    <EntriesContext.Provider value={providerValue}>
      {children}
    </EntriesContext.Provider>
  );
};

export const useEntires = () => {
  const entires = useContext(EntriesContext);
  if (entires === 'undefined') {
    throw new Error(
      ' useEntries must be warped in a EntriesProvider component'
    );
  }

  return entires;
};
