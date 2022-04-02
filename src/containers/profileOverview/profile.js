import React, { useState } from "react";
import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";
import DashboardHeader from "../dashboard/dashboardHeader";
import "./../../styling/profile.scss";
import { useNavigate } from "react-router-dom";
import { emailValidation, passwordValidation } from "../../utils";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();

  const [profileState, setProfileState] = useState({
    email: ``,
    password: ``,
    gender: ``,
    country: ``,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (validateHandler()) {
      console.log("Please submit the form");
      navigate("/dashboard");
    } else {
      console.log("Error");
    }
  };

  const validateHandler = () => {
    if (!emailValidation(profileState.email.trim())) {
      toast.error(`Please enter correct email.`);
      return false;
    } else if (!passwordValidation(profileState.password.trim())) {
      toast.error(`Please enter correct password.`);
      return false;
    }
    return true;
  };

  const updateStatus = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case `email`:
        setProfileState({ ...profileState, email: value });
        break;

      case `password`:
        setProfileState({ ...profileState, password: value });
        break;

      case `gender`:
        setProfileState({ ...profileState, gender: value });
        break;

      case `country`:
        setProfileState({ ...profileState, country: value });
        break;

      default:
        break;
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div className="section_profile">
        <div className="section_container">
          <h1 className="section_heading">Edit profile</h1>

          <div className="section_profile_details">
            <form onSubmit={submitHandler}>
              <div className="control_section">
                <label className="control_lbl">Email</label>
                <input
                  name="email"
                  type="text"
                  value={profileState.email}
                  className="control_input"
                  onChange={updateStatus}
                />
              </div>

              <div className="control_section">
                <label className="control_lbl">Password</label>
                <input
                  name="password"
                  type="password"
                  value={profileState.password}
                  className="control_input"
                  onChange={updateStatus}
                />
              </div>

              <div className="control_section">
                <label className="control_lbl">Gender</label>
                <select
                  className="control_select"
                  value={profileState.gender}
                  onChange={updateStatus}
                  name="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                </select>
              </div>

              <div
                className="control_section"
                value={profileState.country}
                onChange={updateStatus}
                name="country"
              >
                <label className="control_lbl">Country or region</label>
                <select className="control_select">
                  <option value="india">India</option>
                </select>
              </div>

              <div className="edit_profile_container">
                <button type="submit" className="btn btn_edit_profile">
                  Save Profile
                </button>
                <button
                  className="btn btn_cancel"
                  onClick={() => navigate(`/dashboard`)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn_pwd"
                  onClick={() => navigate(`/change-pwd`)}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
