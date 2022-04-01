import React from "react";
import "./../../styling/changePassword.scss";

const ChangePassword = () => {
  return (
    <div className="section_change_password">
      <div className="section_container">
        <h1 className="section_heading">Change your password</h1>

        <div className="section_change_password_details">
          <div className="control_section">
            <label className="control_lbl">Current password</label>
            <input type="password" value="" className="control_input" />
          </div>

          <div className="control_section">
            <label className="control_lbl">New password</label>
            <input type="password" value="" className="control_input" />
          </div>

          <div className="control_section">
            <label className="control_lbl">Repeat new password</label>
            <input type="password" value="" className="control_input" />
          </div>

          <div className="edit_change_password_container">
            <button className="btn btn_edit_change_password">
              Set New Password
            </button>
            <button className="btn btn_cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
