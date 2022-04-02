import React, { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

import Toast from "./utils/customToast";
import Loader from "./utils/customLoader";
import { passwordValidation } from "./utils/index";

import { toast } from "react-toastify";
import BackDrop from "./components/backDrop";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import Home from "./pages/welcome/home";
import Login from "./containers/login/login";
import SignUp from "./containers/signUp/signup";
import ProfileOverview from "./containers/profileOverview/profileOverview";
import Profile from "./containers/profileOverview/profile";
import ChangePassword from "./containers/changePassword/changePassword";
import Dashboard from "./containers/dashboard";
import SideMenu from "./containers/dashboard/sideMenu";
import DashboardHeader from "./containers/dashboard/dashboardHeader";
import BrowseCategory from "./containers/dashboard/browseCategory";
import Artist from "./containers/dashboard/artist";

const App = () => {
  useEffect(() => {
    console.log("at", passwordValidation("Test123"));
    toast.success("Please fill all fields."); // error, warning, success
  }, []);

  return (
    <>
      {/* <Toast /> */}
      {/* <Loader /> */}
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Header /> */}
      {/* <ProfileOverview /> */}
      {/* <Profile /> */}
      {/* <ChangePassword /> */}
      {/* <Footer /> */}

      {/* <Dashboard /> */}
      <DashboardHeader />
      <SideMenu />
      <Dashboard />
      {/* <Artist /> */}
      {/* <BrowseCategory /> */}
    </>
  );
};

export default App;
