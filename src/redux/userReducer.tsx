import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserData {
  email: string;
  currency: string;
  firstname: string;
  lastname: string;
  avatar: string;
}

const userDataSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    currency: '',
    firstname: '',
    lastname: '',
    avatar: '',
    loading: false,
  },

  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstname = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastname = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const {setCurrency, setEmail, setFirstName, setLastName} =
  userDataSlice.actions;

export default userDataSlice.reducer;
