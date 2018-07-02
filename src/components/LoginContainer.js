import React, { Component } from 'react';
import Header from './Header';

class LoginContainer extends Component {
    state = { email: '', password: '', error: '' };

    login() {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(res => {
            this.onLogin();
          })
          .catch(err => {
            if (err.code === 'auth/user-not-found') {
              this.signup();
            } else {
              this.setState({ error: 'Error logging in.' });
            }
          });
      }
      
      signup() {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
          this.setState({ error: 'Error signing up.' });
        });          
      }

      onLogin() {
        this.props.history.push('/');
      }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };
     
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ error: '' });
        if (this.state.email && this.state.password){
            this.login();
       } else {
           this.setState({ error: 'Fill both fields.'})
       }
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
                        <p className="error">{this.state.error}</p> 
                        <button className="red light" type="submit">Login</button>
                    </form>          
                </div>
        );
    }
}

export default LoginContainer;