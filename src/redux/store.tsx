import {configureStore} from '@reduxjs/toolkit';
import userDataReducer from './userReducer';

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
