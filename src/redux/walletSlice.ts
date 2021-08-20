import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface WalletData {
    data: {
        walletId: string;
        title: string;
        walletTransactions: [];
    };
   
}

const initialState : WalletData = {
    data: {
        walletId: '',
        title: '',
        walletTransactions: [],
    },
}

const walletDataSlice = createSlice({
    name: 'walletDataSlice',
    initialState,

    reducers: {
        setWalletData(state, action: PayloadAction<{walletId: string; title: string; walletTransactions: [];  }>) {
            state.data = action.payload
        },
    }
})

export const { setWalletData} = walletDataSlice.actions

export default walletDataSlice.reducer