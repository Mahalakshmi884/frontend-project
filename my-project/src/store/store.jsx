import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import emailReducer from '../features/emails/emailSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    emails: emailReducer,
  },
});

export default store;
