import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  currentuser: null,
  users: [],
  isAuthenticated: false,
  found: false,
  isUser: false,
  loading: false,
  error: null,
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logout: (state) => {
      state.currentuser = null;
      state.isAuthenticated = false;
      state.isUser = false;
      state.error = null;
    },
    login: (state, action) => {
        state.currentuser = action.payload;
        state.isAuthenticated = true;
        state.isUser = true;
        state.error = null;
    },
    loginFail: (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
        state.isUser = false;

    },
    register: (state, action) => {
      state.currentuser = action.payload;
      state.isAuthenticated = true;
      state.found = false;
      state.isUser = true;
      state.error = null;
      state.users.push(action.payload);
    },
    registerFail: (state, action) => {
          state.error = action.payload;
          state.isAuthenticated = false;
          state.isUser = false;
          state.found = true;
  
      }
  },

});

export const { login,logout, register, registerFail, loginFail } = authenticationSlice.actions;



export default authenticationSlice.reducer