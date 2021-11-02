import React from 'react';

import {
  getToken, isAuth, login, logout,
} from './MockAuthService';

const AuthContext = React.createContext(null);
const useAuth = () => React.useContext(AuthContext);

function AuthProvider({ children, ...rest }) {
  // AuthContext to encapsulate these functions, which are wrappers to the services service.
  const auth = {
    getToken,
    isAuth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={auth} {...rest}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
