import React, { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';
import type { User, AuthState } from '../types';
import authService from '../services/authService';

// Define the Context Shape
interface AuthContextType extends AuthState {
  register: (userData: any) => Promise<void>;
  login: (userData: any) => Promise<void>;
  logout: () => void;
  reset: () => void; // Clear error messages
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Initial State
const initialState: AuthState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>(initialState);

  // Check for logged-in user on mount
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setState((prev) => ({ ...prev, user }));
    }
  }, []);

  // Actions
  const register = async (userData: any) => {
    setState((prev) => ({ ...prev, isLoading: true, isError: false, message: '' }));
    try {
      const user = await authService.register(userData);
      setState({ ...initialState, user, isSuccess: true });
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || error.toString();
      setState({ ...initialState, isError: true, message });
    }
  };

  const login = async (userData: any) => {
    setState((prev) => ({ ...prev, isLoading: true, isError: false, message: '' }));
    try {
      const user = await authService.login(userData);
      setState({ ...initialState, user, isSuccess: true });
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || error.toString();
      setState({ ...initialState, isError: true, message });
    }
  };

  const logout = () => {
    authService.logout();
    setState(initialState);
  };

  const reset = () => {
    setState((prev) => ({ ...prev, isError: false, isSuccess: false, message: '' }));
  };

  return (
    <AuthContext.Provider value={{ ...state, register, login, logout, reset }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for easier usage
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};