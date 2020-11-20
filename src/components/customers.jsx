import React from 'react';

const Customers = ({...props}) => {
  console.log(props);

    for (const key in props) {
      const element = props[key];
      console.log(element);
    }

  return (
    <h1>
      customers { 100/100 }
  {props["age"] && <label>{props["age"]}</label>}
    </h1>
    );
};
 
export default Customers;