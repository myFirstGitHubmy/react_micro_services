import {ALL_USERS, AUTH_USER, LOGOUT, NEW_USER} from "../types";

const handlers = {
    [ALL_USERS]: (state, {payload}) => ({...state, users: payload}),
    [NEW_USER]: (state, {payload}) => ({...state, users: [...state.users], payload}),
    [AUTH_USER]: (state, {payload}) => ({users: state.users, isAuth: true, authUser: payload}),
    [LOGOUT]: (state) => ({users: state.users, isAuth: false, authUser: null}),
    DEFAULT: state => state
}

export const databaseReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}