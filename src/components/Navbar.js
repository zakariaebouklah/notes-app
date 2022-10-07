import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="fixed w-screen h-24 flex flex-row justify-between p-5 bg-light-one border-b-4 border-b-black">
                <div id="logo" className="w-1/4">
                    <p className="relative translate-x-1/2 translate-y-1/2">Logo</p>
                </div>
                <div id="connexion" className="w-3/4 flex flex-row space-x-9 justify-end">
                    <button className="bg-light-two rounded-md w-32 border-2 border-black hover:bg-black hover:text-white
                                        transition-all ease-in-out duration-300 delay-75">
                        Login
                    </button>
                    <button className="bg-light-two rounded-md w-32 border-2 border-black hover:bg-black hover:text-white
                                        transition-all ease-in-out duration-300 delay-75">
                        Register
                    </button>
                </div>
            </nav>
        );
    }
}

export default Navbar;