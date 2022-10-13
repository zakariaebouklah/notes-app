import React from 'react';

function NotePreview(props) {

    const handleAccessClick = () => {
        document.querySelector("#note-check").classList.remove("hidden");
        props.onAccessClicked({
            title: props.noteContent.title,
            body: props.noteContent.body
        })
    }

    const handleDeleteClick = () => {
        // console.log(props.noteContent)

        document.querySelector("#delete-modal").classList.remove("hidden");
        props.onDeleteClicked(props.noteContent.docID);
    }

    return (
        <div className="container">
            <p className="title">{props.noteContent.title}</p>
            <p className="body">{props.noteContent.body}</p>
            <p className="date">{new Date(props.noteContent.createdAt.seconds * 1000).toLocaleString()}</p>
            <div className="controlsContainer">
                <button className="lilButton edit">&#9998;</button>
                <button onClick={handleDeleteClick} className="lilButton del">&#10006;</button>
                <button onClick={handleAccessClick} className="lilButton access">&#9781;</button>
            </div>
        </div>
    );
}

export default NotePreview;
