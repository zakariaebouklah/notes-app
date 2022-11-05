import './index.css';
import Navbar from "./components/Regulars/Navbar";
import RegistrationModal from "./components/Modals/RegistrationModal";
import LoginModal from "./components/Modals/LoginModal";
import {Route, Routes, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,
        signOut, onAuthStateChanged} from 'firebase/auth';
import {auth} from "./firebase";
import Home from "./components/Regulars/Home";
import {useEffect, useState} from "react";
import Loader from "./components/Regulars/Loader";
import ErrorPage from "./components/404/ErrorPage";
import MyNotes from "./components/ShowNote/MyNotes";
import NewNote from "./components/ComposeANote/NewNote";

import BackGd from './images/BckGdd.png';

function App() {

    const text = "We're Sure You've got something to write today... 🔥🚀 Go Ahead!!!";

    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [txt, setTxt] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, function(user) {
            let userAuth = user != null
            setIsConnected(userAuth);
            // console.log(userAuth);
            if (isLoading === true)
            {
                setIsLoading(false)
            }
        });

    }, [])

    //Auto-Type Animation

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setTxt(text.slice(0, txt.length + 1))
        }, 100)
        return () => clearInterval(timeoutID);
    }, [txt]);


    function login(event, email, password) {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                // console.log(response.user);
                setIsConnected(true);
            });

        const modal = document.querySelector("#login-modal");
        modal.classList.add("hidden");

        const form = modal.querySelector("form");
        form.reset();

        navigate("/home");

    }

    function register(event, username, email, password) {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                // console.log(response.user);
                setIsConnected(true);
            });

        const modal = document.querySelector("#register-modal");
        modal.classList.add("hidden");

        const form = modal.querySelector("form");
        form.reset();

        navigate("/home");

    }

    function logout() {
        signOut(auth)
            .then(response => {
                console.log("successful logout");
            })

        navigate("/");
    }

  return (
      <>
          {
              isLoading ?
              <Loader/>
              :
              <div className="relative h-screen overflow-y-scroll bg-orange-100 dark:bg-dark-one">
                  <Navbar logoutEvent={logout} userState={isConnected}/>
                  <RegistrationModal onRegister={register}/>
                  <LoginModal onLogin={login}/>
                  {
                      isConnected ?
                      <Routes>
                          <Route path="/home" exact element={<Home/>}/>
                          <Route path="/my_notes" element={<MyNotes/>}/>
                          <Route path="/new_note" element={<NewNote/>}/>
                          <Route path="*" element={<ErrorPage/>}/>
                      </Routes>
                      :
                          <div className="relative text-center">
                              <img src={BackGd} alt="stPage" className="mt-16"/>
                              <div className="absolute w-72 h-36 left-1/2 top-1/2 -mt-20 -ml-28 font-bold">
                                  <p id="text-auto-typed" className="text-3xl">{txt} <span className="anime">&#119078;</span></p>
                              </div>
                          </div>
                  }
              </div>
          }
      </>
  );
}

export default App;
