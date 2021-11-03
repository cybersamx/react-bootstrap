import React from 'react';

import { AuthContext } from './AuthProvider';

function useAuth() {
  return React.useContext(AuthContext);
}

export default useAuth;
