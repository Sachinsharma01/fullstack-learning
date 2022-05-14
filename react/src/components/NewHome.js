import React from "react";
import Home from "./Home";

const NewHome = ({name}) => {
  return (
    <div className="newHome" style={{ borderWidth: "5px", borderColor: "red", width: "300px"}}>
      <h4>In New Home </h4>
      <Home name={name} />
    </div>
  );
};

export default NewHome;
