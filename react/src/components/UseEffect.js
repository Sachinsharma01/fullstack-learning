import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [toggle]);
  return (
    <>
      <p>In UseEffect</p>
      <button onClick={() => setToggle((toggle) => !toggle)}>click me</button>
    </>
  );
};

export default UseEffect;
