import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

type InitialStateType = {
    login: string
    password: string
}

// Define the initial state using that type
const initialState: InitialStateType = {
    login: '',
    password: '',
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<InitialStateType>) => {
            // return state = {...action.payload}
            state.login = action.payload.login
            state.password = action.payload.password
        },
        /*addChar: (state, action: PayloadAction<InitialStateType>) => {
            // state.login = state.login + '_T'
            return action.payload
        }*/
    },
})

export const {register} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer