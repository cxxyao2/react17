import React, { Component } from 'react';
class Posts extends Component {
 
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
  }
  render() {

    let numbers = [1, 2, 3, 4, 5];
    let listms = numbers.map((mbm, idx) =>
      <li kye={idx}>
        {mbm}
      </li>
    );

    return (
      <div onClick={this.handleClick} style={{ backgroundColor: "red", width: "100px", height: "100px", borderRadius: "100%" }}>
        {this.state.isToggleOn ? "on" : "off"}
        {listms.length > 0 && (<ul>
          {listms}
        </ul>) }
      </div>
    );
  }
}

export default Posts;