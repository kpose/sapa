import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserData {
  email: string;
  currency: string;
  firstname: string;
  lastname: string;
  avatar: string;
  symbol: string;
  token: string;
  username: string
}
const initialState : UserData = {
  email: '',
  currency: '',
  firstname: '',
  lastname:'',
  avatar: '',
  symbol: '',
  token: '',
  username: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,

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
} = userSlice.actions;

export default userSlice.reducer;
