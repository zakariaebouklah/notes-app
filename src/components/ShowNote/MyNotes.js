import React, {useEffect, useState} from 'react';
import {auth, db} from '../../firebase';
import {collection, getDocs, orderBy, query, where} from 'firebase/firestore';
import ShowNoteModal from "../Modals/ShowNoteModal";
import NotePreview from "./NotePreview";
import ConfirmationDeleteModal from "../Modals/ConfirmationDeleteModal";
import Loader from "../Regulars/Loader";
import UpdateNoteModal from "../Modals/UpdateNoteModal";

function MyNotes(props) {

    const [content, setContent] = useState([]);
    const [actualNote, setActualNote] = useState({title: "", body: ""});
    const [noteID, setNoteID] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [valuesToBeUpdated, setValuesToBeUpdated] = useState({
        title: "", body: "", updatedAt: null
    })
    const [theDoc, setTheDoc] = useState("");

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

                    if (isLoading === true)
                    {
                        setIsLoading(false);
                    }

                })

            })
            .catch(err => console.log(err.message))
    }, [])

    /**
     * to avoid the "Warning: Each child in a list should have a unique "key" prop." we better have to index our
     * returned Elements by adding a uniq key prop for each one.
     */
    const myContent = content.map(
        (note, index) => <NotePreview
                                key={index}
                                noteContent={note}
                                onAccessClicked={setActualNote}
                                onDeleteClicked={setNoteID}
                                onEditClicked={setValuesToBeUpdated}
                                onEditClicked2={setTheDoc}/>
    );

    return (
            isLoading ?
            <Loader/>
            :
            <div id="notes-container"
                 className="relative dark:bg-dark-one grid grid-cols-3 gap-3 gap-y-16 p-14
                            place-items-center top-24 h-full">
                <ShowNoteModal noteInDetails={actualNote}/>
                <ConfirmationDeleteModal doc={noteID}/>
                <UpdateNoteModal ID={theDoc} values={valuesToBeUpdated}/>
                {myContent}
            </div>
    );
}

export default MyNotes;
