import React from 'react';

function Button(props) {
    return (
        <button id={props.btnId} className="btn"
                onClick={props.daAction}>
            {props.name}
        </button>
    );
}

export default Button;