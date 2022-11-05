import React, {Component} from 'react';

class LoginModal extends Component {

    state = {
        email: '',
        password: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        this.props.onLogin(e, this.state.email, this.state.password);
    }

    render() {
        return (
            <div id="login-modal" className="modal hidden">
                <div className="modal-content space-y-32">
                    <h3 className="text-center text-3xl">
                        Login
                    </h3>
                    <form onSubmit={this.handleSubmit} id="login-form" className="flex flex-col space-y-24">
                        <div className="flex flex-row space-x-3 w-full">
                            <label className="flex flex-row place-content-center" htmlFor="login-email-address">
                                <p>Email Address</p>
                            </label>
                            <input onChange={this.handleChange}
                                   className="p-2.5 focus:outline-none shadow-inner placeholder:italic rounded-xl w-full dark:placeholder-black/75 dark:bg-dark-three"
                                   type="email" id="email"
                                   placeholder="Enter Email Address..." required={true}/>
                        </div>

                        <div className="flex flex-row space-x-7 w-full">
                            <label className="flex flex-row place-content-center" htmlFor="login-password">
                                <p>Password</p>
                            </label>
                            <input onChange={this.handleChange}
                                   autoComplete={"current-password"}
                                   className="p-2.5 focus:outline-none shadow-inner placeholder:italic rounded-xl w-full dark:placeholder-black/75 dark:bg-dark-three"
                                   type="password" id="password"
                                   placeholder="Enter Password..." required={true}/>
                        </div>

                        <button type="submit"
                                className="bg-light-one dark:bg-dark-three rounded-md w-32 p-1.5 border-2 border-black
                                           hover:bg-light-four dark:hover:bg-dark-one hover:text-white transition-all ease-in-out duration-300 delay-75">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginModal;