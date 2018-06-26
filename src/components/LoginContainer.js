import React, { Component } from 'react';
import Header from './Header';

class LoginContainer extends Component {
    state = { email: '', password: '' };
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };
     
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        //this.setState({password: this.state.email});
    };    

    render() {
        return (
                <div id="LoginContainer" className="inner-container">
                     <Header />
                    <form onSubmit={this.handleSubmit}>
                        <p>Sign in or sign up by entering your email and password.</p>
                        <input 
                            onChange={this.handleEmailChange}
                            value={this.state.email}                        
                            type="text" 
                            placeholder="Your email" />
                        <input
                            onChange={this.handlePasswordChange}
                            value={this.state.password} 
                            type="password" 
                            placeholder="Your password" />
                        <button className="red light" type="submit">Login</button>
                    </form>          
                </div>
        );
    }
}

export default LoginContainer;