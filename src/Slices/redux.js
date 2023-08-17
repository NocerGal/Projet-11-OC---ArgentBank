import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { token: null, userName: null },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const createToken = (token) => {
  return {
    type: 'createSlice/saveToken',
    payload: token,
  };
};

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
