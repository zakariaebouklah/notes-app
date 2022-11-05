import React, {useEffect, useState} from 'react';
import darkIcon from '../../icons/night-mode.png';
import lightIcon from '../../icons/brightness.png';

function ThemeSwitcher(props) {

    const [isDark, setIsDark] = useState(false);

    /**
     * the first useEffect will be used to persist the icon In the Switcher
     * and the class for html element as well
     *
     * the second one will be used to update the localStorage darkMode's value
     * each time the switcher gets clicked i.e. the state gets updated
     *
     */

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("darkMode"));
        if (data)
        {
            document.querySelector("html").classList.add("dark");
        }
        setIsDark(data);
    }, [] )

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(isDark))
    }, [isDark])

    const handleClick = () => {
        setIsDark(!isDark);
        if (document.querySelector("html").classList.contains("dark"))
        {
            document.querySelector("html").classList.remove("dark");
        }
        else
        {
            document.querySelector("html").classList.add("dark");
        }
    }

    return (
        <div className="w-11 h-11 rounded-full bg-white hover:bg-dark-one border-2 border-black
                        place-self-center shadow-inLight flex items-center justify-center
                        transition-all ease-in-out duration-300 delay-75">
            <button id="switcher" onClick={handleClick}>
                {
                    isDark
                        ?
                        <img src={lightIcon} alt="dark" className="w-7 h-7"/>
                        :
                        <img src={darkIcon} alt="light" className="w-7 h-7"/>
                }
            </button>
        </div>
    );
}

export default ThemeSwitcher;
