import React from 'react';
import {RiQuillPenLine} from "react-icons/ri";
import {BsTrashFill} from "react-icons/bs";
import {GiNotebook} from "react-icons/gi";

function NotePreview(props) {

    const handleAccessClick = () => {
        document.querySelector("#note-check").classList.remove("hidden");
        props.onAccessClicked({
            title: props.noteContent.title,
            body: props.noteContent.body
        })
    }

    const handleDeleteClick = () => {
        document.querySelector("#delete-modal").classList.remove("hidden");
        props.onDeleteClicked(props.noteContent.docID);
    }

    const handleEditClick = () => {
        document.querySelector("#update-modal").classList.remove("hidden");
        props.onEditClicked({
            title: props.noteContent.title,
            body: props.noteContent.body,
            updatedAt: props.noteContent.updatedAt
        })
        props.onEditClicked2(props.noteContent.docID)
    }

    return (
        <div className="container">
            <p className="title">{props.noteContent.title}</p>
            <p className="body">{props.noteContent.body}</p>
            {
                props.noteContent.updatedAt.toLocaleString() === props.noteContent.createdAt.toLocaleString() ?
                    <div className="h-12">
                        <p className="date"><span className="text-black text-opacity-25">Created at:</span> {new Date(props.noteContent.createdAt.seconds * 1000).toLocaleString()}</p>
                    </div>
                    :
                    <div className="h-12">
                        <p className="date"><span className="text-black text-opacity-25">Created at:</span> {new Date(props.noteContent.createdAt.seconds * 1000).toLocaleString()}</p>
                        <p className="date"><span className="text-black text-opacity-25">Updated at:</span> {new Date(props.noteContent.updatedAt.seconds * 1000).toLocaleString()}</p>
                    </div>
            }
            <div className="controlsContainer shadow-3xl">
                <button onClick={handleEditClick} className="lilButton edit"><RiQuillPenLine size={20}/></button>
                <button onClick={handleDeleteClick} className="lilButton del"><BsTrashFill size={20}/></button>
                <button onClick={handleAccessClick} className="lilButton access"><GiNotebook size={20}/></button>
            </div>
        </div>
    );
}

export default NotePreview;
