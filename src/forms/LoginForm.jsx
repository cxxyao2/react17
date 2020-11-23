
import React from 'react';
import Joi from 'joi-browser';

import Form from '../components/common/form';

class LoginForm extends Form {
  state = { 
    data:{ username: "", password: ""},
    errors: {}
  };

  schema = {
     username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
     password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required()
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  }


  render() { 
    return ( 
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', "password")}
          {this.renderButton("Login")}
        </form>
      </div>
      );
  }
}
 
export default LoginForm;