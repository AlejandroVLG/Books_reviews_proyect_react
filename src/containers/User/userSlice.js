import { createSlice } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { useNavigate } from "react-router"

export const userSlice = createSlice({

    name: 'user',
    initialState: {
        token: "",
        infoData: {}
    },
    reducers: {
        register: (state, action) => {
            return {
                ...state
            }
        },
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

export const registerUser = (name, nick_name, email, password, profile_img) => async (dispatch) => {

    try {
        const response =
        {
            name: name,
            nick_name: nick_name,
            email: email,
            password: password,
            profile_img: profile_img
        }

        if (response.status === 200 || response.status === 201) {
            dispatch(register(response.data))
        }

    } catch (error) {
        console.log(error)
    }
}

export const loginUser = (body) => async (dispatch) => {

    try {
        const userToken = await axios.post("https://bookapi.up.railway.app/api/login", body)

        if (userToken.status === 200) {

            const identification = userToken.data;

            let requirements = {
                headers: {
                    "Authorization": `Bearer ${identification.token}`
                }
            }

            // Using an other EndPoint, i've saved the logged user profile data on infoData.

            const userInfoData = await axios.get('https://bookapi.up.railway.app/api/user/myProfile', requirements)

            dispatch(login(
                {
                    token: userToken.data.token,
                    infoData: userInfoData.data
                }
            ))
        }

    } catch (error) {
        console.log(error)
    }
}

export const logOut = () => (dispatch) => {

    dispatch(logout())
}

export const { register, login, logout } = userSlice.actions

export const userData = (state) => state.user

export default userSlice.reducer

