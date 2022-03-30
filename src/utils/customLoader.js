import React from "react";
import BackDrop from "../components/backDrop";
import "./../styling/customLoader.scss";

const Loader = () => {
  return (
    <BackDrop>
      <span class="loader"></span>
    </BackDrop>
  );
};

export default Loader;
