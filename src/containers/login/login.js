import React from "react";
import "./../../styling/login.scss";

import Logo from "./../../assets/images/logo.png";

const Login = () => {
  return (
    <div className="section_login">
      <div className="logo_container">
        <img src={Logo} alt="Logo" />
      </div>

      <hr />

      <div className="form_area">
        <form>
          <div className="form_container">
            <div className="control_container">
              <label className="lbl_control">Email address or username</label>
              <input
                className="input_control"
                type="text"
                value=""
                placeholder="Email address or username"
              />
            </div>

            <div className="control_container">
              <label className="lbl_control">Password</label>
              <input
                className="input_control"
                type="password"
                value=""
                placeholder="Password"
              />
            </div>

            <div className="forgot_pwd_container">
              <a href="/#" className="forgot_pwd_txt">
                Forgot your password?
              </a>
            </div>

            <div className="remember_me_container">
              <input
                type="checkbox"
                id="remember_me"
                className="chkbox_input"
              />
              <label for="remember_me" className="chkbox_lbl">
                Remember me
              </label>
            </div>

            <div className="btn_container">
              <button type="submit" className="btn btn_submit">
                Log In
              </button>
            </div>

            <hr className="horizontal" />
            <div className="didnot_acc">
              <p className="didnot_acc_lbl">Don't have an account?</p>
            </div>

            <div className="sign_up_container">
              <button type="button" className="btn btn_signup">
                Sign up for MyTune
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
