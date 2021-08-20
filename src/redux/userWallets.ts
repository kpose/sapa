import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserWallets {
  wallets: []
}


const initialState : UserWallets = {
  wallets: []
}

const userWalletsSlice = createSlice({
  name: 'userWallets',
  initialState,

  reducers: {
    setUserWallets(state, action: PayloadAction<[]>) {
      state.wallets = action.payload;
    }, 
    
    
  },
});

export const {
  setUserWallets,
 
} = userWalletsSlice.actions;

export default userWalletsSlice.reducer;
