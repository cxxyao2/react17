
import React from 'react';
import Joi from 'joi-browser';

import Form from '../components/common/form';

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", email: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Username"),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required()
      .label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  }


  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email','email')}
          {this.renderInput('password', 'Password', "password")}
          {this.renderInput('username', 'Username')}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;