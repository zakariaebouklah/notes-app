import React from 'react';
import {db, auth} from '../firebase';
import {collection, getDocs, query, where, orderBy} from 'firebase/firestore';

function MyNotes(props) {

    const colRef = collection(db, 'note');

    const q = query(colRef, orderBy("createdAt", "desc"), where("user", "==", auth.currentUser.uid))

    getDocs(q)
        .then(snap => {

            let note;
            let noteTitle;
            let noteBody;
            snap.docs.forEach(doc => {
                note = document.createElement("div");
                noteTitle = document.createElement("p");
                noteBody = document.createElement("p");

                noteTitle.innerHTML = doc.data().title;
                noteBody.innerHTML = doc.data().body;

                //styling

                note.classList.add("container");
                noteTitle.classList.add("title")
                noteBody.classList.add("body");

                note.appendChild(noteTitle);
                note.appendChild(noteBody);

                document.querySelector("#notes-container").appendChild(note);
            })
        })
        .catch(err => console.log(err.message))

    return (
        <div
            className="relative top-24 grid grid-cols-3 gap-3 gap-y-16 m-7 p-14 place-items-center"
            id="notes-container"></div>
    );
}

export default MyNotes;