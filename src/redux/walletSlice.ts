import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface WalletData {
    data: {
    walletId: string;
    title: string;
    walletTransactions: [];
    };
    needed2: []
}

const initialState : WalletData = {
    data: {
        walletId: '',
        title: '',
        walletTransactions: [],
    },
    needed2: []
}

const walletSlice = createSlice({
    name: 'walletSlice',
    initialState,

    reducers: {

        setWalletData(state, action: PayloadAction<{walletId: string; title: string; walletTransactions: [];  }>) {
            state.data = action.payload
        },
        setNeeded2(state, action: PayloadAction<any>) {
            state.needed2 = action.payload
        },

        clearData(state) {
            Object.assign(state, initialState)
        }
    }
})

export const { setWalletData, clearData, setNeeded2} = walletSlice.actions

export default walletSlice.reducer