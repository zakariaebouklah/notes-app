import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <div className="absolute
                            flex flex-row items-center justify-center
                            top-0 right-0 left-0 bottom-0
                            my-24 space-x-7">
                <Link to="/new_note" className="btn2 h-16 p-5 font-bold">Compose A New Note</Link>
                <Link to="/my_notes" className="btn2 h-16 p-5 font-bold">Check your notes</Link>
            </div>
        </div>
    );
}

export default Home;