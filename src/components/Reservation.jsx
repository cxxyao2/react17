import React, { Component } from 'react';
class Reservation extends Component {
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    
    this.handleInputChanges = this.handleInputChanges.bind(this);
  }

  handleInputChanges(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  render() { 
    return ( 
      <form action="">
        <label htmlFor="isGoing">isGoing
          <input 
          id="isGoing" 
          name="isGoing" 
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChanges}
          />
        </label>
        <br />
        <label htmlFor="numberOfGuests">
          <input
            id="numberOfGuests"
            name="numberOfGuests"
            type="number"
            checked={this.state.numberOfGuests}
            onChange={this.handleInputChanges}
          />
        </label>
      </form>
     );
  }
}
 
export default Reservation;