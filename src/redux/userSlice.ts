import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserData {
  email: string;
  currency: string;
  firstname: string;
  lastname: string;
  avatar: string;
  symbol: string;
  username: string;
  allWallets:[];
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
  allWallets: [],
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
    logoutUser(state) {
        Object.assign(state, initialState)
    },
    setAllWallets(state, action: PayloadAction<[]>) {
      state.allWallets = action.payload
    }
    
  },
});

export const {
  setCurrency,
  setEmail,
  setFirstName,
  setUsername,
  setSymbol,
  setAllWallets,
  logoutUser
} = userSlice.actions;

export default userSlice.reducer;
