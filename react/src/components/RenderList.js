import React from "react";

const RenderList = () => {
  const members = ["sachin", "nishant", "parul", "akhil", "sanskriti mishra"];
  return (
    <ul>
      {members.map((data) => 
        <li>{data}</li>
      )}
    </ul>
  );
};

export default RenderList;
