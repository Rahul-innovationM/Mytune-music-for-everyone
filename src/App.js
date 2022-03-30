import React, { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

import Toast from "./utils/customToast";
import Loader from "./utils/customLoader";
import { passwordValidation } from "./utils/index";

import { toast } from "react-toastify";
import BackDrop from "./components/backDrop";
import Header from "./components/shared/header";

const App = () => {
  useEffect(() => {
    console.log("at", passwordValidation("Test123"));
    toast.success("Please fill all fields."); // error, warning, success
  }, []);

  return (
    <>
      {/* <Toast /> */}
      {/* <Loader /> */}
      <Header />
      {/* <h1>MyTune: music for everyone</h1> */}
    </>
  );
};

export default App;
