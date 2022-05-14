import React, { useState } from "react";
import ShowProps from "./ShowProps";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();

  const printHello = () => {
    console.log("Hello World this is a function in props");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`name: ${name}, Number: ${number}`);
  };
  return (
    <>
      <form className="form">
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(event) => {
            setNumber(event.target.value);
          }}
          type="number"
          placeholder="number"
        />
        <button className="btn" onClick={submitHandler} type="submit">
          Submit
        </button>
      </form>
      <ShowProps username={name} userage={number} city={"mathura"} print={printHello} />
    </>
  );
};

export default Form;
