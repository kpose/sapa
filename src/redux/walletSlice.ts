import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface WalletData {
    data: {
    walletId: string;
    title: string;
    walletTransactions: [];
    }
}

const initialState : WalletData = {
    data: {
        walletId: '',
        title: '',
        walletTransactions: [],
    }
}

const walletSlice = createSlice({
    name: 'walletSlice',
    initialState,

    reducers: {

        setWalletData(state, action: PayloadAction<{walletId: string; title: string; walletTransactions: [];  }>) {
            state.data = action.payload
        },

        clearData(state) {
            Object.assign(state, initialState)
        }
    }
})

export const { setWalletData, clearData} = walletSlice.actions

export default walletSlice.reducer