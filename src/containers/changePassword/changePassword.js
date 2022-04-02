import React, { useState } from "react";
import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";
import "./../../styling/changePassword.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { passwordValidation } from "../../utils";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [pwdState, setPwdState] = useState({
    oldPassword: ``,
    newPassword: ``,
    confirmPassword: ``,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (validateHandler()) {
      console.log("Please submit the form");
      navigate("/login");
    } else {
      console.log("Error");
    }
  };

  const validateHandler = () => {
    if (!passwordValidation(pwdState.oldPassword.trim())) {
      toast.error(`Please enter correct password.`);
      return false;
    } else if (!passwordValidation(pwdState.newPassword.trim())) {
      toast.error(`Please enter correct password.`);
      return false;
    } else if (!passwordValidation(pwdState.confirmPassword.trim())) {
      toast.error(`Please enter correct password.`);
      return false;
    } else if (
      pwdState.confirmPassword.trim() !== pwdState.newPassword.trim()
    ) {
      toast.error(`New password and Confirm password doesn't match.`);
      return false;
    }
    return true;
  };

  const updateStatus = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case `old-password`:
        setPwdState({ ...pwdState, oldPassword: value });
        break;

      case `new-password`:
        setPwdState({ ...pwdState, newPassword: value });
        break;

      case `confirm-password`:
        setPwdState({ ...pwdState, confirmPassword: value });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="section_change_password">
        <div className="section_container">
          <h1 className="section_heading">Change your password</h1>

          <form onSubmit={submitHandler}>
            <div className="section_change_password_details">
              <div className="control_section">
                <label className="control_lbl">Current password</label>
                <input
                  type="password"
                  name="old-password"
                  value={pwdState.oldPassword}
                  className="control_input"
                  onChange={updateStatus}
                />
              </div>

              <div className="control_section">
                <label className="control_lbl">New password</label>
                <input
                  type="password"
                  name="new-password"
                  value={pwdState.newPassword}
                  className="control_input"
                  onChange={updateStatus}
                />
              </div>

              <div className="control_section">
                <label className="control_lbl">Repeat new password</label>
                <input
                  type="password"
                  name="confirm-password"
                  value={pwdState.confirmPassword}
                  className="control_input"
                  onChange={updateStatus}
                />
              </div>

              <div className="edit_change_password_container">
                <button className="btn btn_edit_change_password">
                  Set New Password
                </button>
                <button
                  className="btn btn_cancel"
                  onClick={() => navigate(`/dashboard`)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChangePassword;
