import React from 'react';
import Ruler from '../../icons/regle.png';
import Idea from '../../icons/creativity.png';
import Tape from '../../icons/note-tape.png';
import Pen from '../../icons/fountain-pen.png';

function ShowNoteModal(props) {

    return (
        <div className="modal hidden" id="note-check">
            <div className="relative z-30 bg-light-two rounded-md opacity-100 flex flex-col justify-between
        w-[1200px] h-[550px] p-7">
                <div id="container" className="flex flex-col space-y-11 my-11 mx-7">
                    <div id="title" className="text-center italic font-extrabold">{props.noteInDetails.title}</div>
                    <div id="body" className="shadow-inner bg-black/25 rounded-xl p-9 h-72 overflow-y-scroll">
                        {props.noteInDetails.body}
                    </div>
                </div>
                <img className="w-16 h-16 absolute bottom-3 right-3" src={Pen} alt="p"/>
                <img className="w-40 h-16 absolute -top-9 left-[500px] -rotate-6" src={Tape} alt="t"/>
                <img className="w-16 h-16 absolute top-3 right-3 rotate-12" src={Idea} alt="i"/>
                <img className="w-16 h-16 absolute bottom-3 left-3" src={Ruler} alt="r"/>
            </div>
        </div>
    );
}

export default ShowNoteModal;
