import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const userSlice = createSlice({

    name: 'user',
    initialState: {
        token: "",
        isRegister: false,
        successMessage: "",
        infoData: {}
    },
    reducers: {
        register: (state, action) => {
            return {
                ...state,
                isRegister: true,
                successMessage: "Te has registrado correctamente"
            }
        },
        login: (state, action) => {
            return {
                ...state,
                ...action.payload,
                successMessage: "Te has identificado correctamente"
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

export const registerUser = (name, nick_name, email, password) => async (dispatch) => {
    try {
        const user = await axios.post('https://books-reviews-app-proyect.herokuapp.com/api/register',
            {
                name: name,
                nick_name: nick_name,
                email: email,
                password: password
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

        const userToken = await axios.post("https://books-reviews-app-proyect.herokuapp.com/api/login", body);

        if (userToken.status === 200) {

            const identification = userToken.data;

            let requirements = {
                headers: {
                    "Authorization": `Bearer ${identification.token}`
                }
            }

            // Using an other EndPoing i've saved the logged user profile data on infoData.

            const userInfoData = await axios.get('https://books-reviews-app-proyect.herokuapp.com/api/user/myProfile', requirements)

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
};

export const logOut = () => (dispatch) => {
    dispatch(logout());

};

export const { register, login, logout } = userSlice.actions

export const userData = (state) => state.user

export default userSlice.reducer

