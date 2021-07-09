import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserData {
  email: string;
  currency: string;
  firstname: string;
  lastname: string;
  avatar: string;
  symbol: string;
  username: string;
  grandTotal: number[];
  last30days: [];
  last7days: []
}
const initialState : UserData = {
  email: '',
  currency: '',
  firstname: '',
  lastname:'',
  avatar: '',
  symbol: '', 
  username: '', 
  grandTotal: [],
  last30days: [],
  last7days: []
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
    logoutUser() {

    },
    setGrandTotal(state, action: PayloadAction<number>) {
      //state.grandTotal.push(action.payload)
    }
    
  },
});

export const {
  setCurrency,
  setEmail,
  setFirstName,
  setUsername,
  setSymbol,
  setGrandTotal,
  logoutUser
} = userSlice.actions;

export default userSlice.reducer;
