import React from 'react';

function ShowNoteModal(props) {

    return (
        <div className="modal hidden" id="note-check">
            <div className="modal-content">
                <div id="container">
                    <div id="title"></div>
                    <div id="body"></div>
                </div>
            </div>
        </div>
    );
}

export default ShowNoteModal;
