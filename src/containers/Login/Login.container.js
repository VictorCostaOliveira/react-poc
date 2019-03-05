import React, { Component } from 'react'
import FormComponent from '../../components/Login/Form.component';

class LoginCont extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = (event) => {
    this.setState( {email: event.target.value} );
  };

  handlePasswordChange = (event) => {
    this.setState( {password: event.target.value} );
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="login-container">
        <FormComponent></FormComponent>
      </div>
    )
  }
}

export default LoginCont;