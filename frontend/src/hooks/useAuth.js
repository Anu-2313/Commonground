import { useState } from 'react';
import AuthService from '../services/AuthService.js';

const useAuth = () => {
  const [token, setToken] = useState(AuthService.getToken());

  const signIn = async (credentials) => {
    const data = await AuthService.login(credentials);
    AuthService.storeToken(data.token);
    setToken(data.token);
    return data;
  };

  const signOut = () => {
    AuthService.logout();
    setToken(null);
  };

  return {
    token,
    signIn,
    signOut
  };
};

export default useAuth;
