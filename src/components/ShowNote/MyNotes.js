import React, {useEffect, useState} from 'react';
import {auth, db} from '../../firebase';
import {collection, getDocs, orderBy, query, where} from 'firebase/firestore';
import ShowNoteModal from "../Modals/ShowNoteModal";
import NotePreview from "./NotePreview";

function MyNotes(props) {

    const [content, setContent] = useState([]);
    const [actualNote, setActualNote] = useState({title: "", body: ""});

    const colRef = collection(db, 'note');

    const q = query(colRef, orderBy("createdAt", "desc"), where("user", "==", auth.currentUser.uid));

    useEffect(() => {
        getDocs(q)
            .then(snap => {

                snap.docs.forEach(doc => {

                    /**
                     * appending data to the state of component.
                     */

                    setContent(prevState => [...prevState, doc.data()]);
                })

            })
            .catch(err => console.log(err.message))
    }, [])

    /**
     * to avoid the "Warning: Each child in a list should have a unique "key" prop." we better have to index our
     * returned Elements by adding a uniq key prop for each one.
     */
    const myContent = content.map(
        (note, index) => <NotePreview key={index} noteContent={note} onAccessClicked={setActualNote}/>
    );

    return (
        <div id="notes-container"
             className="relative top-24 grid grid-cols-3 gap-3 gap-y-16 m-7 p-14 place-items-center">
            <ShowNoteModal noteInDetails={actualNote}/>
            {myContent}
        </div>
    );
}

export default MyNotes;
