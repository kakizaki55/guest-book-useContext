import { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const providerValue = { user, setUser };
  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  if (user === 'undefined') {
    throw new Error('useUser must be warped in a UserProvider component');
  }

  return user;
};
