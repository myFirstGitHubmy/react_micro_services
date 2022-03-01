import React from "react";
import {BrowserRouter} from "react-router-dom"
import './App.css';
import {DatabaseState} from "./context/database/databaseState";
import AuthPage from "./component/pages/AuthPage";
import {AlertState} from "./context/alert/AlertState";
import {NotesState} from "./context/notes/notesState";

export default function App() {
    return (
        <DatabaseState>
            <AlertState>
                <NotesState>
                    <BrowserRouter>
                        <AuthPage/>
                    </BrowserRouter>
                </NotesState>
            </AlertState>
        </DatabaseState>
    );
}

