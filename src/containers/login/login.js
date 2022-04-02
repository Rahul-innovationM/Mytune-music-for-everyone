import React, { useState } from "react";
import "./../../styling/login.scss";

import Logo from "./../../assets/images/logo.png";
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { useNavigate } from "react-router-dom";
import { emailValidation, passwordValidation } from "../../utils";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [signIn, setSignIn] = useState({
    email: ``,
    password: ``,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    e.preventDefault();

    if (validateHandler()) {
      console.log("Please submit the form");
      navigate("/dashboard");
    } else {
      console.log("Error");
    }
  };

  const validateHandler = () => {
    if (!emailValidation(signIn.email.trim())) {
      toast.error(`Please enter correct email in email field.`);
      return false;
    } else if (!passwordValidation(signIn.password.trim())) {
      toast.error(`Please enter proper password.`);
      return false;
    }
    return true;
  };

  const updateStatus = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case `email`:
        setSignIn({ ...signIn, email: value });
        break;

      case `password`:
        setSignIn({ ...signIn, password: value });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="section_login">
        <div className="logo_container">
          <img src={Logo} alt="Logo" />
        </div>

        <hr />

        <div className="form_area">
          <form onSubmit={submitHandler}>
            <div className="form_container">
              <div className="control_container">
                <label className="lbl_control">Email address or username</label>
                <input
                  type="text"
                  name="email"
                  value={signIn.email}
                  className="input_control"
                  placeholder="Email address or username"
                  onChange={updateStatus}
                />
              </div>

              <div className="control_container">
                <label className="lbl_control">Password</label>
                <input
                  type="password"
                  name="password"
                  value={signIn.password}
                  placeholder="Password"
                  className="input_control"
                  onChange={updateStatus}
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
                <button
                  type="button"
                  className="btn btn_signup"
                  onClick={() => navigate(`/signup`)}
                >
                  Sign up for MyTune
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

export default Login;
