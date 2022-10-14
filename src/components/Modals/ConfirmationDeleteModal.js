import React from 'react';
import {doc, deleteDoc} from 'firebase/firestore';
import {db } from '../../firebase';
import {useNavigate} from "react-router-dom";

function ConfirmationDeleteModal(props) {

    const navigate = useNavigate();

    const handleGoBack = e => {
        e.preventDefault();
        document.querySelector("#delete-modal").classList.add("hidden");
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        deleteDoc(doc(db, "note", props.doc) )
            .then(response => console.log("deleted successfully"))
            .catch(err => console.log(err.message))

        navigate("/home");
    }

    return (
        <div className="modal hidden" id="delete-modal">
            <div className="z-30 bg-light-two rounded-md opacity-100 flex flex-col space-y-11
                            w-[500px] h-[250px] justify-center items-center">
                <p className="text-center">Are you sure you want to delete this note?</p>
                <form onSubmit={handleSubmit} className="flex flex-row space-x-7 items-center justify-center">
                    <button type="submit" className="bg-black rounded-md w-32 border-2 border-red-500
        hover:bg-red-500 text-red-500 hover:text-black transition-all ease-in-out duration-300 delay-75
        text-center flex justify-center items-center shadow-3xl h-12">Yes, Delete</button>
                    <button onClick={handleGoBack} className="bg-black rounded-md w-32 border-2 border-light-one
        hover:bg-light-one text-light-one hover:text-black transition-all ease-in-out duration-300 delay-75
        text-center flex justify-center items-center shadow-3xl h-12">Go Back</button>
                </form>
            </div>
        </div>
    );
}

export default ConfirmationDeleteModal;
