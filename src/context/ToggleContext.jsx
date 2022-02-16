import { useState, useCallback, createContext, useContext } from 'react';

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [darkMode, setState] = useState(false);
  const toggle = useCallback(() => setState((darkMode) => !darkMode), []);
  const value = { darkMode, toggle };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (context === 'undefined') {
    throw new Error('useToggle must be warped in a ToggleProvider component');
  }

  return context;
};
