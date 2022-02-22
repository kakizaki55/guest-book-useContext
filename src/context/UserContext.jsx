import { useState, createContext, useContext } from 'react';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const login = (email, password) => {
    if (
      email === process.env.REACT_APP_AUTH_EMAIL &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser(email);
      return true;
    } else {
      return false;
    }
  };
  const logout = () => {
    setUser('');
  };

  const providerValue = { user, login, logout };
  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === 'undefined') {
    throw new Error('useUser must be warped in a UserProvider component');
  }

  return context;
};
