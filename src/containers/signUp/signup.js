import React from "react";
import "./../../styling/signUp.scss";
import Logo from "./../../assets/images/logo.png";

const SignUp = () => {
  return (
    <div className="section_sign_up">
      <div className="logo_container">
        <img src={Logo} alt="Logo" />
      </div>

      <hr />

      <div className="form_area">
        <form>
          <div className="form_container">
            <div className="control_container">
              <label className="lbl_control">What's your email?</label>
              <input
                className="input_control"
                type="email"
                value=""
                placeholder="Email your email."
              />
            </div>

            <div className="control_container">
              <label className="lbl_control">Confirm your email</label>
              <input
                className="input_control"
                type="email"
                value=""
                placeholder="Enter your email again."
              />
            </div>

            <div className="control_container">
              <label className="lbl_control">Create a password</label>
              <input
                className="input_control"
                type="password"
                value=""
                placeholder="Create a password."
              />
            </div>

            <div className="control_container">
              <label className="lbl_control">What should we call you?</label>
              <input
                className="input_control"
                type="text"
                value=""
                placeholder="Enter a profile name."
              />
            </div>

            <div className="radio_input_control">
              <label className="lbl_control">What should we call you?</label>
              <input
                type="radio"
                id="male"
                name="fav_language"
                value="male"
                className="radio_control"
              />
              <label for="male" className="radio_lbl">
                Male
              </label>

              <input
                type="radio"
                id="female"
                name="fav_language"
                value="female"
                className="radio_control"
              />
              <label for="female" className="radio_lbl">
                Female
              </label>

              <input
                type="radio"
                id="transgender"
                name="fav_language"
                value="transgender"
                className="radio_control"
              />
              <label for="transgender" className="radio_lbl">
                Non-binary
              </label>
            </div>

            <div className="remember_me_container">
              <input
                type="checkbox"
                id="remember_me"
                className="chkbox_input"
              />
              <label for="remember_me" className="chkbox_lbl">
                I would prefer not to receive marketing messages from Spotify
              </label>
            </div>

            <div className="btn_container">
              <button type="submit" className="btn btn_submit">
                Sign up
              </button>
            </div>

            <hr className="horizontal" />
            <div className="didnot_acc">
              <p className="didnot_acc_lbl">Already have an account?</p>
            </div>

            <div className="sign_up_container">
              <button type="button" className="btn btn_signup">
                Sign in for MyTune
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
