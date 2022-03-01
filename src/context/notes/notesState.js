import axios from "axios";
import {notesReducer} from "./notesReducer";
import React, {useReducer} from "react";
import {NotesContext} from "./notesContext";
import {ALL_LIST, ALL_NOTE, HOST, NEW_NOTE} from "../types";

export const NotesState = ({children}) => {

    const initial = {
        list: [{
            notes: []
        }]
    }

    const [state, dispatch] = useReducer(notesReducer, initial)

    const allList = async () => {
        const url = HOST + '/api/list/all'
        const res = await axios.get(url)
        console.log(res)
        const payload = Object.keys(res.data).map(key => {
            return ({
                id:res.data[key].id,
                ...res.data[key]
            })
        })
        dispatch({type: ALL_LIST, payload})
    }

    const allNotes = async () => {
        const url = HOST + '/api/note/all'
        const res = await axios.get(url)
        console.log(res)
        const payload = Object.keys(res.data).map(key => {
            return ({
                id:res.data[key].id,
                ...res.data[key]
            })
        })
        dispatch({type: ALL_NOTE, payload})
    }

    const createNote = async (note) => {
        const url = HOST + '/api/note/new'
        const res = await axios.post(url, note)
        const payload = Object.keys(res.data).map(key => {
            return ({
                id:res.data[key].id,
                ...res.data[key]
            })
        })
        dispatch({type: NEW_NOTE, payload})
    }

    return (
        <NotesContext.Provider
            value={
                {
                 list: state.list,
                 notes: state.list.notes,
                 allNotes,
                 createNote,
                 allList
                }
            }
        >
            {children}
        </NotesContext.Provider>
    )
}