import { configureStore, createSlice } from '@reduxjs/toolkit';

const userInfosSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userName: localStorage.getItem('userName'),
    firstName: null,
    lastName: null,
  },
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
    saveFirstName: (state, action) => {
      const newFirstName = {
        firstname: action.payload,
      };
      state.firstName = newFirstName;
    },
    saveLastName: (state, action) => {
      const newLastName = {
        lastname: action.payload,
      };
      state.lastName = newLastName;
    },

    resetUser: (state) => {
      return {
        token: null,
        userName: null,
        firstName: null,
        lastName: null,
      };
    },
  },
});

export const {
  saveToken,
  saveUserName,
  saveFirstName,
  saveLastName,
  resetUser,
} = userInfosSlice.actions;

export const store = configureStore({
  reducer: {
    user: userInfosSlice.reducer,
  },
});

export const stateToken = (token) => {
  return {
    type: 'user/saveToken',
    payload: token,
  };
};

export const stateUserName = (newUserName) => {
  return {
    type: 'user/saveUserName',
    payload: newUserName,
  };
};

export const stateFirstName = (newFirstName) => {
  return {
    type: 'user/saveFirstName',
    payload: newFirstName,
  };
};

export const stateLastName = (newLastName) => {
  return {
    type: 'user/saveLastName',
    payload: newLastName,
  };
};
