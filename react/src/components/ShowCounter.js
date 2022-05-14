import React, { useContext } from "react";
import { autherName } from "../App";

const ShowCounter = ({ val, incr, decr, name }) => {
    const authname = useContext(autherName) //! return autherName{'nishant'}
  return (
    <>
      <p>{val}</p>
      <button onClick={incr}> + </button>

      <button onClick={decr}> - </button>
      <p>This is Created by {authname}</p>
    </>
  );
};

export default ShowCounter;
