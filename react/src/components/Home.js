import React, { useState } from "react";

const Home = () => {
  const [val, setVal] = useState(0);
  const increment = () => {
    setVal(val + 1);
  };
  const decrement = () => {
    setVal(val - 1);
  };

  return (
    <>
      <p>{val}</p>
      <button onClick={increment}> + </button>

      <button onClick={decrement}> - </button>
    </>
  );
};
//! JSX => JavaScript XML ----> (HTML IN JAVASCRIPT)
export default Home;
