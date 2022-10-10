import React, {Component} from 'react';

class RegistrationModal extends Component {

    state = {
        email: '',
        password: '',
        username: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        this.props.onRegister(e, this.state.username, this.state.email, this.state.password);
    }

    render() {
        return (
            <div id="register-modal" className="modal hidden">
                <div className="modal-content">
                    <h3 className="text-center text-3xl">
                        Registration
                    </h3>
                    <form onSubmit={this.handleSubmit} id="register-form" className="flex flex-col space-y-7">
                        <label htmlFor="register-email-address">Email Address</label>
                        <input onChange={this.handleChange}
                               className="p-2.5 focus:outline-none shadow-inner rounded-xl"
                               type="email" id="email"
                               placeholder="Enter Email Address..." required={true}/>

                        <label htmlFor="register-password">Password</label>
                        <input onChange={this.handleChange}
                               autoComplete={"current-password"}
                               className="p-2.5 focus:outline-none shadow-inner rounded-xl"
                               type="password" id="password"
                               placeholder="Enter Password..." required={true}/>

                        <label htmlFor="register-username">Username</label>
                        <input onChange={this.handleChange}
                               className="p-2.5 focus:outline-none shadow-inner rounded-xl"
                               type="text" id="username"
                               placeholder="Choose a Username..." required={true}/>

                        <button type="submit"
                                className="bg-light-one rounded-md w-32 p-1.5 border-2 border-black hover:bg-light-four
                            hover:text-white transition-all ease-in-out duration-300 delay-75">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegistrationModal;