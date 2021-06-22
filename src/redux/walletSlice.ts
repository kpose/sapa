import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface WalletData {
    data: {
        uid: string;
        title: string;
        transactions: [];
    }
}

const initialState : WalletData = {
    data: {
        uid: '',
        title: '',
        transactions: [],
    }
}

const walletSlice = createSlice({
    name: 'walletSlice',
    initialState,

    reducers: {
        setWalletData(state, action: PayloadAction<{uid: string; title: string; transactions: [];  }>) {
            state.data = action.payload
        }
    }
})

export const { setWalletData} = walletSlice.actions

export default walletSlice.reducer