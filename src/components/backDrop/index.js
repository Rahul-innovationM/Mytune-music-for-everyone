import React from "react";
import "./../../styling/backDrop.scss";

const BackDrop = (props) => {
  return <div className="backdrop"> {props.children}</div>;
};

export default BackDrop;
