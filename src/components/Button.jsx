import React, { Component } from 'react'

export default class Button extends Component {
  handleClick() {
    this.setState(state => ({
      words: state.words.concat(['marklar'])
    }));
  }

  // To write this without mutating the original object, we can use Object.assign method:
  updateColorMap(colormap) {
  return Object.assign({}, colormap, { right: 'blue' });
}

  render() {
    return (
      <div>
        componentDidUpdate(prevProps, prevState) {
          
        }
        
      </div>
    )
  }
}
