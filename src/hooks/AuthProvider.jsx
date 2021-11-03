import React from 'react';

import {
  getSession, isAuth, login, logout, addUser, getUsers,
} from '../services/MockAuthService';

const AuthContext = React.createContext(null);

function AuthProvider({ children, ...rest }) {
  // AuthContext to encapsulate these functions, which are wrappers to the services service.
  const auth = {
    getSession,
    isAuth,
    login,
    logout,
    addUser,
    getUsers,
  };

  return (
    <AuthContext.Provider value={auth} {...rest}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
