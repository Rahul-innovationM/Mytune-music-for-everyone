import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

import Toast from "./utils/customToast";
import Loader from "./utils/customLoader";
import { passwordValidation } from "./utils/index";

import { toast } from "react-toastify";
import BackDrop from "./components/backDrop";
import Home from "./pages/welcome/home";
import Login from "./containers/login/login";
import SignUp from "./containers/signUp/signup";
import ProfileOverview from "./containers/profileOverview/profileOverview";
import Profile from "./containers/profileOverview/profile";
import ChangePassword from "./containers/changePassword/changePassword";
import Dashboard from "./containers/dashboard";

const App = () => {
  useEffect(() => {
    console.log("at", passwordValidation("Test123"));
    // toast.success("Please fill all fields."); // error, warning, success
  }, []);

  return (
    <>
      <Toast />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile-overview" element={<ProfileOverview />}></Route>
        <Route path="/change-pwd" element={<ChangePassword />}></Route>
      </Routes>
    </>
  );
};

export default App;
