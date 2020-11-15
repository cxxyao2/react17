import React, { Component } from 'react';
class Circle extends Component {
  constructor(props){
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState( state => ({isToggleOn: !state.isToggleOn }));
  }
  render() {
    return (
      <div onClick={this.handleClick} style={{backgroundColor:"red",width:"100px",height:"100px",borderRadius: "100%"}}>
        {this.state.isToggleOn ? "on" : "off"}
        {this.props.relation}
      </div>
    );
  }
}

export default Circle;