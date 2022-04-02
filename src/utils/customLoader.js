import React from "react";
import BackDrop from "../components/backDrop";
import "./../styling/customLoader.scss";

const Loader = () => {
  return (
    <BackDrop>
      <span className="loader"></span>
    </BackDrop>
  );
};

export default Loader;
