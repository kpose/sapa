import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import AddExpenseReducer from './AddExpenseReducer';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userSlice,
    AddExpense: AddExpenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
