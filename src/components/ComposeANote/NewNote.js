import React, {useState} from 'react';
import photo from '../../images/NoteAppLogo.png';
import {auth, db} from "../../firebase";
import {doc, setDoc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import tape from "../../icons/wholeTape.png";
import {Editor} from "react-draft-wysiwyg";
import {EditorState, convertFromRaw} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function NewNote(props) {

    const navigate = useNavigate();

    const uuid = require("uuid");

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    // const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const user = auth.currentUser.uid;

    let tempID = uuid.v4();
    let date = new Date();

    // const onEditorStateChange = (editorState) => {
    //     setEditorState(editorState)
    // }

    const handleSubmit = e => {
        e.preventDefault();
        //idea is to set custom doc id using UUID
        setDoc(doc(db, "note", tempID), {
            title: title,
            body: body,
            user: user,
            createdAt: date,
            updatedAt: date,
            docID: tempID
        }).then(res => console.log("Ok")).catch(err => console.log(err.message()))

        navigate("/my_notes");
    }

    return (
        <div className="absolute flex flex-row space-x-7 dark:bg-dark-one items-center justify-center bg-orange-100 w-full h-full mt-14">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3 bg-light-one dark:bg-dark-two items-start w-1/2 p-7 relative shadow-3xl rounded-lg">
                <input required={true} id="title" onChange={e => setTitle(e.target.value)} type="text" placeholder="Give this note a title..." className="input dark:input-dark"/>
                <textarea required={true} id="body" onChange={e => setBody(e.target.value)} placeholder="Write down your ideas..." className="input h-80 dark:input-dark"/>
                {/*<Editor*/}
                {/*    editorState={editorState}*/}
                {/*    toolbarClassName="toolbarClassName"*/}
                {/*    wrapperClassName="wrapperClassName"*/}
                {/*    editorClassName="input h-96"*/}
                {/*    placeholder="Write down your ideas..."*/}
                {/*    onEditorStateChange={onEditorStateChange}*/}
                {/*    required={true}*/}
                {/*/>*/}
                <button type="submit" className="btn3 dark:btn3-dark h-10">Submit</button>
                <img src={photo} alt="photo" className="w-16 h-16 absolute -top-16 -left-5 -rotate-12"/>
                <img src={tape} alt="photo" className="w-16 h-16 absolute -bottom-5 -right-5 -rotate-12"/>
            </form>
        </div>
    );
}

export default NewNote;