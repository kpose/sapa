import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ExpenseData {
  marchant: string;
    note: string;
    amount: number;
    type: string;
    category: string;
    image: string;
    loading: boolean;
    iconTitle: string;
    date: string
}

const initialState : ExpenseData = {
  marchant: '',
  note: '',
  amount: 0,
  type: '',
  category: '',
  image: '',
  loading: false,
  iconTitle: '',
  date: ''

 
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
    },
    setDate(state, action: PayloadAction<string>){
      state.date = action.payload
    },
    clearExpense(state) {
        Object.assign(state, initialState)
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
  setIconTitle,
  setDate,
  clearExpense
} = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
