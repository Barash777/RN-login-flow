import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

type UserType = {
    login: string
    password: string
}

type InitialStateType = {
    user: UserType
    registeredUsers: UserType[]
}

// Define the initial state using that type
const initialState: InitialStateType = {
    user: {
        login: '',
        password: ''
    },
    registeredUsers: []
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<UserType>) => {
            // return state = {...action.payload}
            // state.user.login = action.payload.user.login
            // state.user.password = action.payload.user.password
            state.registeredUsers.push(action.payload)
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