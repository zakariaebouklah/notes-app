import React from 'react';
import LoaderLogo from '../../images/LoaderNoteAppLogo.png';

function Loader(props) {
    return (
        <div>
            <img src={LoaderLogo} alt="Loading..."
                 className="w-72 h-72 relative left-1/2 translate-y-1/2 -translate-x-1/2"/>
        </div>
    );
}

export default Loader;