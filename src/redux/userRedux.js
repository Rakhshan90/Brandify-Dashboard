import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    currentUser: null,
    users: [],
    isFetching: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSucces: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        //get users
        getUserStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getUserSuccess: (state, action) => {
            state.isFetching = false
            state.users = action.payload
        },
        getUserFail: (state) => {
            state.isFetching = false
            state.error = true
        },
    },
},
)

export const {
    loginStart,
    loginSucces,
    loginFailure,
    getUserStart,
    getUserSuccess,
    getUserFail,
} = userSlice.actions;
export default userSlice.reducer;