import React, {useState} from 'react';
import photo from '../../images/NoteAppLogo.png';
import {auth, db} from "../../firebase";
import {addDoc, collection} from "firebase/firestore";
import {useNavigate} from "react-router-dom";

function NewNote(props) {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const user = auth.currentUser.uid;

    const handleSubmit = e => {
        e.preventDefault();
        const docRef = addDoc(collection(db, "note"), {
            title: title,
            body: body,
            user: user,
            createdAt: new Date()
        }).then(res => console.log(res.id)).catch(err => console.log(err.message()))

        navigate("/home");
    }

    return (
        <div className="absolute flex flex-row space-x-7 items-center justify-center bg-gray-100 w-full h-full mt-14">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3 bg-light-one items-start w-1/2 p-7 relative shadow-3xl rounded-lg">
                <input required={true} id="title" onChange={e => setTitle(e.target.value)} type="text" placeholder="Give this note a title..." className="input"/>
                <textarea required={true} id="body" onChange={e => setBody(e.target.value)} placeholder="Write down your ideas..." className="input h-80"/>
                <button type="submit" className="btn3 h-10">Submit</button>
                <img src={photo} alt="photo" className="w-16 h-16 absolute -top-16 -left-5 -rotate-12"/>
            </form>
        </div>
    );
}

export default NewNote;