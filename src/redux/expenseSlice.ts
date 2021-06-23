import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ExpenseData {
  marchant: string;
    note: string;
    amount: number;
    type: string;
    category: string;
    image: string;
    loading: boolean;
    iconTitle: string
}

const initialState : ExpenseData = {
  marchant: '',
  note: '',
  amount: 0,
  type: '',
  category: '',
  image: '',
  loading: false,
  iconTitle: ''


}

const ExpenseSlice = createSlice({
  name: 'expense',
  initialState,

  reducers: {
    setMarchant(state, action: PayloadAction<string>) {
      state.marchant = action.payload;
    },
    setNote(state, action: PayloadAction<string>) {
      state.note = action.payload;
    },
    setAmount(state, action: PayloadAction<number>) {
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
    setIconTitle(state, action: PayloadAction<string>) {
      state.iconTitle = action.payload
    }
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
  setIconTitle
} = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
