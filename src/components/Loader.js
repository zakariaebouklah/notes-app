import React from 'react';
import LoaderLogo from '../images/LoaderNoteAppLogo.png';

function Loader(props) {
    return (
        <div>
            <img src={LoaderLogo} alt="Loading..."
                 className="w-64 h-64 relative left-1/2 translate-y-1/2 -translate-x-1/2"/>
            <p className="text-center text-3xl">Loading...</p>
        </div>
    );
}

export default Loader;