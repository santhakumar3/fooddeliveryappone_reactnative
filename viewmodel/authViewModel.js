import React, { createContext, useState } from 'react';
import User from '../model/userModel';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email && password) {
      setUser(new User(email, password, 'John Doe'));
      return true;
    }
    return false;
  };

  const signup = (email, password, name) => {
    if (email && password && name) {
      setUser(new User(email, password, name));
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
