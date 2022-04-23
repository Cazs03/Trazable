import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogged: true, //TODO cambiar valor
  },
  reducers: {
    tryLogin: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export const { tryLogin } = loginSlice.actions;

export const selectGetLogin = (state: { login: { isLogged: boolean } }) => state.login.isLogged;

export default loginSlice.reducer;
