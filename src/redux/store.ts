import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import ExpenseSlice from './expenseSlice';
import walletSlice from './walletSlice';
import {useDispatch} from 'react-redux';


import { combineReducers } from 'redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';




const reducers = combineReducers({
  user: userSlice, 
  expense: ExpenseSlice,
  wallet: walletSlice
})

const  persistConfig = {
  key: 'root',
  version: 1,
 // blacklist: ['expense'],
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer : persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REGISTER,REHYDRATE, PURGE, PAUSE,PERSIST]
    }
  })

}); 

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


reducer: persistedReducer