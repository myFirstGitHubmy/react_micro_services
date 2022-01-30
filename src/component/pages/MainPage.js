import React, { useState } from "react";
import {onDragEnd, onDragOver, onDragStart, onDrop} from "./drag/DragEvent";
import MenuUserPage from "../burger/MenuUserPage";

export default function MainPage() {
    const [listTitleColumn, setListTitleColumn] = useState('toDo')
    function eventClickToInput(event){
        event.addEventListener('click',()=> {return <input type="text"/>})
        event.addEventListener('focusout', ()=> {return <p>124</p>})
        return <p>124</p>
    }

        return (
        <div>
            <div className="example-parent">
                <div
                    className="example-origin"
                    onDragOver={event => onDragOver(event)}
                    onDrop={event => onDrop(event)}
                >
                    <div className="title-column-list" >

                        <input type="text" defaultValue={listTitleColumn}/>
                    </div>
                    <div
                        id="draggable-1"
                        className="example-draggable"
                        draggable="true"
                        onDragStart={event => onDragStart(event)}
                        onDragEnd={event => onDragEnd(event)}
                    >
                        <p>124</p>
                    </div>
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