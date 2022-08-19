import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({

    name: 'user',
    initialState: {
        token: "",
        isRegister: false,
        successMessage: ""
    },
    reducers: {
        register: (state, action) => {
            return {
                ...state,
                isRegister: true,
                successMessage: "You've registered successfully"
            }
        }
    }
})

export const registerUser =
    (
        name,
        last_name,
        nick_name,
        email,
        password,
        gender,
        age,
        country,
        favourite_author,
        favourite_genre,
        currently_reading,
        facebook_account,
        twitter_account,
        instagram_account,
    ) => async (dispatch) => {

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

            if (user.status === 200) {
                dispatch(register(user.data))
            }

        } catch (error) {
            console.log(error)
        }
    }

export const { register } = userSlice.actions

export const userData = (state) => state.user

export default userSlice.reducer

