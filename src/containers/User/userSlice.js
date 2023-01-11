import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({

    name: 'user',
    initialState: {
        token: "",
        infoData: {},
        bookData: []
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        logout: (state, action) => {
            return {
                ...state.initialState,
                token: "",
            }
        }
    }
})

export const logOut = () => (dispatch) => {

    dispatch(logout())
}

export const { login, logout } = userSlice.actions

export const userData = (state) => state.user

export default userSlice.reducer

