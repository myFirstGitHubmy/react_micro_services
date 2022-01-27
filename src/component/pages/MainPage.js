import React from "react";
import {onDragEnd, onDragOver, onDragStart, onDrop} from "./drag/DragEvent";

export default function MainPage() {
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
        </div>
    )
}