import React, { Component } from 'react';
import img from '../images/tree1.jpg';

class LoginForm extends Component {
  state = {  }
  render() { 
    return ( 
      <form>
        <img id="image1" src={img} alt={'img'} width={50} height={50} />
        <div className="form-group"><label htmlFor="">login</label><input type="text" className="form-control"/></div>
        <div className="form-group"><label htmlFor="">logout</label><input type="text" className="form-control"/></div>
      </form> );
  }
}
 
export default LoginForm;