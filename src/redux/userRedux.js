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
        //user login
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
        //add users
        addUserStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        addUserSuccess: (state, action) => {
            state.isFetching = false
            state.users.push(action.payload)
        },
        addUserFail: (state) => {
            state.isFetching = false
            state.error = true
        },
        //update users
        updateUserStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        updateUserSuccess: (state, action) => {
            state.isFetching = false
            state.users[state.users.findIndex((item)=>item._id===action.payload.id)]
            =action.payload.user
        },
        updateUserFail: (state) => {
            state.isFetching = false
            state.error = true
        },
        //delete users
        deleteUserStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        deleteUserSuccess: (state, action) => {
            state.isFetching = false
            state.users.splice(
                state.users.findIndex((item) => item._id === action.payload), 1
            )
        },
        deleteUserFail: (state) => {
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
    addUserStart,
    addUserSuccess,
    addUserFail,
    updateUserStart,
    updateUserSuccess,
    updateUserFail,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFail,
} = userSlice.actions;
export default userSlice.reducer;