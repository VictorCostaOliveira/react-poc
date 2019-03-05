import React, { Component } from 'react';

class FormComponent extends Component {
  render() {
    return (
      <div className="form-component">
        <form>
          <div className="wrapper">
            <label htmlFor="email" >E-mail</label>
            <input type="text" id="email"></input>
          </div>
          <div className="wrapper">
            <label htmlFor="password" >Senha</label>
            <input type="password" id="password"></input>  
          </div>
          <input className="btn" type="submit"></input>
        </form>
      </div>
    )
  }
};

export default FormComponent;