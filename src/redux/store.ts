import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import ExpenseSlice from './expenseSlice';
import walletSlice from './walletSlice';
import {useDispatch} from 'react-redux';


import { combineReducers } from 'redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';




const reducers = combineReducers({
  user: userSlice, 
  expense: ExpenseSlice,
  walletData: walletSlice,
})

const  persistConfig = { 
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['user'] 
}



const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer : persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
}); 

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


