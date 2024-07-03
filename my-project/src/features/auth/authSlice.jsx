// src/features/auth/authSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define your initial state here
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      // Logic for handling login
    },
    registerUser: (state, action) => {
      // Logic for handling registration
    },
  },
});

export const { loginUser, registerUser } = authSlice.actions;

export default authSlice.reducer;
