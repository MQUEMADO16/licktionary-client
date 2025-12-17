import api from './api';
import type { User } from '../types';

// Register user
const register = async (userData: any): Promise<User> => {
  const response = await api.post('/auth/register', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData: any): Promise<User> => {
  const response = await api.post('/auth/login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

// Check if user is already logged in (from LocalStorage)
const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;