import React from 'react';
import Page404 from '../../images/404.png';

function ErrorPage(props) {
    return (
        <div className="absolute flex flex-col justify-center items-center
                        top-0 right-0 left-0 bottom-0 m-auto">
            <p className="text-5xl italic">Page Not Found...</p>
            <img src={Page404} alt="404" className="w-[323px] h-[391px]"/>
        </div>
    );
}

export default ErrorPage;