import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt from 'jwt-decode';

export const userSlice = createSlice({

    name: 'user',
    initialState: {
        token: "",
    },
    reducers: {
        register: (state, action) => {
            return {
                ...state,
                isRegister: true,
                successMessage: "You've registered successfully"
            }
        },
        login: (state, action) => {
            return {
                ...state,
                ...action.payload,
                successMessage: "You've logged successfully"
            }
        },
        logout: (state, action) => {
            return {
                ...state.initialState,
                token: ""
            }
        },
    }
})

export const registerUser = (name, last_name, nick_name, email, password, gender, age, country, favourite_author, favourite_genre, currently_reading, facebook_account, twitter_account, instagram_account) => async (dispatch) => {
    try {
        const user = await axios.post('https://books-reviews-app-proyect.herokuapp.com/api/register',
            {
                name: name,
                last_name: last_name,
                nick_name: nick_name,
                email: email,
                password: password,
                gender: gender,
                age: age,
                country: country,
                favourite_author: favourite_author,
                favourite_genre: favourite_genre,
                currently_reading: currently_reading,
                facebook_account: facebook_account,
                twitter_account: twitter_account,
                instagram_account: instagram_account
            }
        )
        let response = user

        if (response.status === 200 || response.status === 201) {
            dispatch(register(response.data))
        }

    } catch (error) {
        console.log(error)
    }
}

export const loginUser = (body) => async (dispatch) => {
    try {

        const user = await axios.post("https://books-reviews-app-proyect.herokuapp.com/api/login", body);

        let decodeToken = jwt(user.data.token);

        if (user.status === 200) {

            dispatch(login({ ...decodeToken, token: user.data.token }))
        }

    } catch (error) {
        console.log(error)
    }
};

export const logOut = () => (dispatch) => {
    dispatch(logout());

};


export const { register, login, logout } = userSlice.actions

export const userData = (state) => state.user

export default userSlice.reducer

