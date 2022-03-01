import React, { useState, useContext, useEffect } from "react";
import {onDragEnd, onDragOver, onDragStart, onDrop} from "./drag/DragEvent";
import MenuUserPage from "../burger/MenuUserPage";
import {NotesContext} from "../../context/notes/notesContext";
import ReactDOM from "react-dom";

export default function MainPage() {
    const [listTitleColumn, setListTitleColumn] = useState('toDo')
    const notes = useContext(NotesContext)
    const [titleNote, setTitleNote] = useState('')
    const [onToggleNewNote, setOnToggle] = useState(false)
    useEffect(() =>
        notes.allList
    ,[])
    console.log(notes.notes)
    const listNotes = notes.list
    console.log(listNotes)

    function eventClickToInput(event){
        event.addEventListener('click',()=> {return <input type="text"/>})
        event.addEventListener('focusout', ()=> {return <p>124</p>})
        return <p>124</p>
    }

    const createNote = () => {
        notes.createNote({name:titleNote})
            .then(()=> notes.allNotes)
        setOnToggle(false)
        setTitleNote('')
    }

        return (
        <div>
            <div className="example-parent">
                <div
                    className="example-origin"
                    onDragOver={event => onDragOver(event)}
                    onDrop={event => onDrop(event)}
                >
                    {listNotes.length === 0? <p>List empty</p> : Object.keys(listNotes).map(note => (
                        <div
                            key={note.id}
                            id={'draggable-'+listNotes[note].id}
                            className="example-draggable"
                            draggable="true"
                            onDragStart={event => onDragStart(event)}
                            onDragEnd={event => onDragEnd(event)}
                            onDragOver={event => onDragOver(event)}
                            onDrop={event => onDrop(event)}
                        >
                            <p>{listNotes[note].name}</p>
                        </div>
                    ))
                    }
                    <p>
                        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button"
                           aria-expanded="false" aria-controls="collapseExample" onClick={() => setOnToggle(!onToggleNewNote)}>
                            {!onToggleNewNote ? 'Add notes':'Hide add notes'}
                        </a>
                    </p>
                    {onToggleNewNote ? <div className="collapse" id="collapseExample">
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Name notes</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-sm" onChange={event => setTitleNote(event.target.value)}/>
                            <button type="button" className="btn btn-light form-control" onClick={createNote}>Add</button>
                        </div>
                    </div>: null}
                </div>

                <div
                    className="example-dropzone"
                    onDragOver={event => onDragOver(event)}
                    onDrop={event => onDrop(event)}
                >
                    dropzone
                </div>
            </div>
            <MenuUserPage />
        </div>
    )
}