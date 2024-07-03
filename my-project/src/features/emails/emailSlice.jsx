// src/features/emails/emailSlice.jsx

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emails: [],
  loading: false,
  error: null,
};

const emailSlice = createSlice({
  name: 'emails',
  initialState,
  reducers: {
    fetchEmailsStart(state) {
      state.loading = true;
    },
    fetchEmailsSuccess(state, action) {
      state.emails = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchEmailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchEmailsStart, fetchEmailsSuccess, fetchEmailsFailure } = emailSlice.actions;

export default emailSlice.reducer;
