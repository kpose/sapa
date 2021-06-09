import {configureStore} from '@reduxjs/toolkit';
import userDataReducer from './userReducer';
import AddExpenseReducer from './AddExpenseReducer';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    AddExpense: AddExpenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
