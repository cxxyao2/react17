import React from 'react'

function withTooltip(Component) {
  return class Wrapper extends React.Component {
    render() {
      return (
        <div>
          <Component />
        </div>
      );
    };
  }
};

export default withTooltip;
