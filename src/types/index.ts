// The shape of the User object returned from the API
export interface User {
  _id: string;
  username: string;
  email: string;
  token: string; // The JWT
}

// Standard API Error response shape
export interface ApiError {
  message: string;
  stack?: string;
}

// Auth State shape for Context
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}