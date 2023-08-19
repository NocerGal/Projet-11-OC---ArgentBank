import { configureStore, createSlice } from '@reduxjs/toolkit';

const userInfosSlice = createSlice({
  name: 'user',
  initialState: { token: null, userName: null },
  reducers: {
    saveToken: (state, action) => {
      const newToken = {
        token: action.payload,
      };
      state.token = newToken;
    },
    saveUserName: (state, action) => {
      const newUserName = {
        username: action.payload,
      };
      state.userName = newUserName;
    },
  },
});

export const store = configureStore({
  reducer: {
    user: userInfosSlice.reducer,
  },
});

export const stateNewToken = (token) => {
  return {
    type: 'user/saveToken',
    payload: token,
  };
};

export const stateNewUserName = (newName) => {
  return {
    type: 'user/saveUserName',
    payload: newName,
  };
};
