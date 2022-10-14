import React, {useState} from 'react';
import {db} from '../../firebase';
import {doc, updateDoc} from "firebase/firestore";

function UpdateNoteModal(props) {

    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const docRef = doc(db, "note", props.ID);
        console.log(docRef)
        updateDoc(docRef, {
            title: newTitle,
            body: newBody,
            updatedAt: new Date()
        }).then(r => {
            window.location.reload();
        })
    }


    return (
        <div id="update-modal" className="modal hidden">
            <div className="modal-content">
                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="text"
                        id="titleToBeUpdated"
                        className="input-edit" onChange={(e) => setNewTitle(e.target.value)} defaultValue={props.values.title}/>
                    <textarea
                        id="bodyToBeUpdated"
                        className="input-edit h-80" onChange={(e) => setNewBody(e.target.value)} defaultValue={props.values.body}/>
                    <button type="submit" className="btn3 h-10">Save Changes</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateNoteModal;
