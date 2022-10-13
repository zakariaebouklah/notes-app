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
                <div className="modal-content">
                    <h3 className="text-center text-3xl">
                        Login
                    </h3>
                    <form onSubmit={this.handleSubmit} id="login-form" className="flex flex-col space-y-14">
                        <label htmlFor="login-email-address">Email Address</label>
                        <input onChange={this.handleChange}
                               className="p-2.5 focus:outline-none shadow-inner rounded-xl"
                               type="email" id="email"
                               placeholder="Enter Email Address..." required={true}/>

                        <label htmlFor="login-password">Password</label>
                        <input onChange={this.handleChange}
                               autoComplete={"current-password"}
                               className="p-2.5 focus:outline-none shadow-inner rounded-xl"
                               type="password" id="password"
                               placeholder="Enter Password..." required={true}/>

                        <button type="submit"
                                className="bg-light-one rounded-md w-32 p-1.5 border-2 border-black hover:bg-light-four
                            hover:text-white transition-all ease-in-out duration-300 delay-75">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginModal;