import React from 'react';
import {Link} from 'react-router-dom';
import BackGd from "../../images/BckGdd.png";

function Home(props) {
    return (
        <div>
            <div className="absolute
                            flex flex-row items-center justify-center
                            top-0 right-0 left-0 bottom-0
                            space-x-7 h-full">
                <Link to="/new_note" className="btn2 dark:btn2-dark h-16 p-5 font-bold dark:shadow-inDark shadow-inLight">Compose A New Note</Link>
                <Link to="/my_notes" className="btn2 dark:btn2-dark h-16 p-5 font-bold dark:shadow-inDark shadow-inLight">Check Your Notes</Link>
            </div>
            <img src={BackGd} alt="stPage" className="mt-16"/>
        </div>
    );
}

export default Home;