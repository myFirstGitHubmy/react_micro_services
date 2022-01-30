import React, {useReducer} from "react";
import {DatabaseContext} from "./databaseContext";
import {databaseReducer} from "./databaseReducer";
import axios from "axios"
import {ALL_USERS, AUTH_USER, LOGOUT, NEW_USER} from "../types";

export const DatabaseState = ({children}) => {
    const host = 'http://localhost:8070'

    const initial = {
        users: [],
        isAuth: false,
        authUser: null
    }

    const [state, dispatch] = useReducer(databaseReducer, initial)

    const authorizationUser = async (user) => {
        const url = host + "/api/user/auth"
        try{
            const object = await axios.post(url, user)
            const payload = {
                    id: object.data.id,
                    ...object
                }
            dispatch({type: AUTH_USER, payload})
        }catch {
            throw new Error(user)
        }

    }

    const allUsers = async () => {
        const url = host + "/api/user/all"
        const res = await axios.get(url)
        const payload = Object.keys(res.data).map(key => {
                return ({
                    id:res.data[key].id,
                    ...res.data[key]
                })
            })
        dispatch({type: ALL_USERS, payload})
    }



    const createUser = async (user) => {
        const url = host + "/api/user/new"
        const res = await axios.post(url, user)
        console.log(res)
        const payload = Object.keys(res.data).map(key => {
            return ({
                id:res.data.id,
                ...res.data
            })
        })
        dispatch({type:NEW_USER, payload})
    }

    const logoutUser = async () => {
        dispatch({type: LOGOUT})
    }

    return (
        <DatabaseContext.Provider
            value={
                {users: state.users,
                allUsers,
                logoutUser,
                createUser,
                authorizationUser,
                isAuth: state.isAuth,
                currentUser: state.authUser}
            }
        >
            {children}
        </DatabaseContext.Provider>
    )
}