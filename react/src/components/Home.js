import React, { useState } from "react";
import ShowCounter from "./ShowCounter";

const Home = ({name}) => {
  const [val, setVal] = useState(0);
  const increment = () => {
    setVal(val + 1);
  };
  const decrement = () => {
    setVal(val - 1);
  };

  return (
    <>
      <ShowCounter name={name} val={val} incr={increment} decr={decrement} />
    </>
  );
};
//! JSX => JavaScript XML ----> (HTML IN JAVASCRIPT)
export default Home;
