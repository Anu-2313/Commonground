import ApiService from './ApiService.js';

const login = (credentials) => ApiService.post('/auth/login', credentials);
const signup = (payload) => ApiService.post('/auth/signup', payload);

const storeToken = (token) => {
  localStorage.setItem('cg_token', token);
};

const getToken = () => localStorage.getItem('cg_token');

const logout = () => {
  localStorage.removeItem('cg_token');
};

export default {
  login,
  signup,
  storeToken,
  getToken,
  logout
};
