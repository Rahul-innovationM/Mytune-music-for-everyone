import React from "react";
import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";
import SideMenu from "../dashboard/sideMenu";
import "./../../styling/profileOverview.scss";
import { useNavigate } from "react-router-dom";

const ProfileOverview = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="section_overview">
        <div className="section_container">
          <h1 className="section_heading">Account overview</h1>
          <h4 className="section_subheading">Profile</h4>

          <div className="section_profile_details">
            <div className="details_row">
              <div className="details_heading">Username</div>
              <div className="details_text">31uvl4ct5vizcmivbjshmgmznlfi</div>
            </div>

            <div className="details_row">
              <div className="details_heading">Email</div>
              <div className="details_text"> rahul.kumar.3@innovationm.com</div>
            </div>

            <div className="details_row">
              <div className="details_heading">Date of birth</div>
              <div className="details_text">September 12, 1998</div>
            </div>

            <div className="details_row">
              <div className="details_heading">Country or region</div>
              <div className="details_text">India</div>
            </div>

            <div className="edit_profile_container">
              <button
                className="btn btn_edit_profile"
                onClick={() => navigate(`/profile`)}
              >
                Edit Profile
              </button>
              <button
                className="btn btn_cancel"
                onClick={() => navigate(`/dashboard`)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileOverview;
