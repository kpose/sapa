import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import ExpenseSlice from './expenseSlice';
import {useDispatch} from 'react-redux';

import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';




const reducers = combineReducers({
  user: userSlice,
    expense: ExpenseSlice,
})

const  persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer : reducers

});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


reducer: persistedReducer