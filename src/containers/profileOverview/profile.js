import React from "react";
import "./../../styling/profile.scss";

const Profile = () => {
  return (
    <div className="section_profile">
      <div className="section_container">
        <h1 className="section_heading">Edit profile</h1>

        <div className="section_profile_details">
          <div className="control_section">
            <label className="control_lbl">Email</label>
            <input
              type="text"
              value="rahul.kumar.3@innovationm.com"
              className="control_input"
            />
          </div>

          <div className="control_section">
            <label className="control_lbl">Password</label>
            <input type="password" value="" className="control_input" />
          </div>

          <div className="control_section">
            <label className="control_lbl">Gender</label>
            <select className="control_select">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
            </select>
          </div>

          <div className="control_section">
            <label className="control_lbl">Country or region</label>
            <select className="control_select">
              <option value="india">India</option>
            </select>
          </div>

          <div className="edit_profile_container">
            <button className="btn btn_edit_profile">Save Profile</button>
            <button className="btn btn_cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
