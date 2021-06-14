import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const AddExpenseSlice = createSlice({
  name: 'user',
  initialState: {
    marchant: '',
    note: '',
    amount: '',
    type: '',
    category: '',
    image: '',
    loading: false,
  },

  reducers: {
    setMarchant(state, action: PayloadAction<string>) {
      state.marchant = action.payload;
    },
    setNote(state, action: PayloadAction<string>) {
      state.note = action.payload;
    },
    setAmount(state, action: PayloadAction<string>) {
      state.amount = action.payload;
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const {
  setAmount,
  setCategory,
  setImage,
  setLoading,
  setMarchant,
  setNote,
  setType,
} = AddExpenseSlice.actions;

export default AddExpenseSlice.reducer;
