import React from "react";
import {ALL_LIST, ALL_NOTE, NEW_LIST, NEW_NOTE, REMOVE_NOTE} from "../types";

const handlers = {
    [ALL_LIST]: (state, {payload}) => ({...state, list: payload}),
    [NEW_LIST]: (state, {payload}) => ({...state, list: [...state.list], notes: [...state.notes], payload}),
    [REMOVE_NOTE]: (state, {payload}) => ({list: state.list.filter(list => list === payload.id)}),
    [ALL_NOTE]: (state, {payload}) => ({...state, notes: payload}),
    [NEW_NOTE]: (state, {payload}) => ({...state, notes: [...state.notes], payload}),
    [REMOVE_NOTE]: (state, {payload}) => ({notes: state.list.notes.filter(note => note === payload.id)}),
    DEFAULT: state => state
}

export const notesReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}