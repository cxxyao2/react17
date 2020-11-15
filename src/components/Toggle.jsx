import React, { Component } from 'react';
class Toggle extends Component {
  state = { isToggleOn: true };

  handleClick = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn});
  }
  render() { 
    return (  
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "on" : "off"}
       
      </button>
    );
  }
}
 
export default Toggle;