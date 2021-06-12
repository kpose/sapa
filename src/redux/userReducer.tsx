import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserData {
  email: string;
  currency: string;
  firstname: string;
  lastname: string;
  avatar: string;
  symbol: string;
  token: string;
}

const userDataSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    currency: '',
    symbol: '',
    username: '',
    firstname: '',
    avatar: '',
    loading: false,
    token: '',
  },

  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstname = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setSymbol(state, action: PayloadAction<string>) {
      state.symbol = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const {
  setCurrency,
  setEmail,
  setFirstName,
  setUsername,
  setSymbol,
  setToken,
} = userDataSlice.actions;

export default userDataSlice.reducer;
