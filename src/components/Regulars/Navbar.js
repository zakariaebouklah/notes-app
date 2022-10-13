import React from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";
import Logo from "../../images/NoteAppLogo.png"

function Navbar(props) {

    function popUp(event, id) {
        event.stopImmediatePropagation();
        const modal = document.querySelector(id);
        if (modal)
        {
            modal.classList.remove("hidden");
        }
    }

    window.addEventListener("click", e => {

        if (e.target.id === "Login")
        {
            popUp(e, "#login-modal");
        }
        else if (e.target.id === "Register")
        {
            popUp(e, "#register-modal");
        }
        else if (e.target.classList.contains("modal"))
        {
            e.target.classList.add("hidden")
        }

    })

    return (
        <nav className="fixed z-30 w-screen h-24 flex flex-row justify-between p-5 bg-light-one border-b-4 border-b-black">
            <div id="logo" className="w-1/4">
                <img className="-translate-y-5 w-20 h-20" src={Logo} alt="logo"/>
            </div>
            <div id="connexion" className="w-3/4 flex flex-row space-x-9 justify-end px-5">
                {
                    props.userState
                    ?
                        <>
                            <Button btnId="Logout" name="Logout" daAction={props.logoutEvent}/>
                            <Link to="/home" className="btn">Home</Link>
                        </>
                    :
                    (
                        <>
                            <Button btnId="Login" name="Login"/>
                            <Button btnId="Register" name="Register"/>
                        </>
                    )
                }


            </div>
        </nav>
    );
}

export default Navbar;