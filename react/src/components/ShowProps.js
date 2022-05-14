import React from "react";

//! props => properties (arguments, parameters)

//! object destructuring
const ShowProps = ({ username, userage, print }) => {
  return (
    <div>
      <p>Name : {username}</p>
      <p>Age : {userage}</p>
      <button onClick={print}>Click me</button>
    </div>
  );
};

export default ShowProps;
