import React from "react";
import Home from "./Home";

const NewHome = () => {
  return (
    <div className="newHome" style={{ borderWidth: "5px", borderColor: "red", width: "300px"}}>
      <h4>In New Home </h4>
      <Home />
    </div>
  );
};

export default NewHome;
