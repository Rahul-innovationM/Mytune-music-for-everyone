import React, { useState } from "react";
import "./../../styling/signUp.scss";
import Logo from "./../../assets/images/logo.png";
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { useNavigate } from "react-router-dom";
import { emailValidation, passwordValidation } from "../../utils";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const [signUpState, setSignUpState] = useState({
    email: ``,
    confirmEmail: ``,
    password: ``,
    nickName: ``,
    gender: `male`,
    agreedTandC: false,
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
    if (!emailValidation(signUpState.email.trim())) {
      toast.error(`Please enter correct email in email field.`);
      return false;
    } else if (!emailValidation(signUpState.confirmEmail.trim())) {
      toast.error(`Please enter correct email in confirm email field.`);
      return false;
    } else if (!passwordValidation(signUpState.password.trim())) {
      toast.error(`Please enter right password.`);
      return false;
    } else if (signUpState.nickName.trim() === ``) {
      toast.error(`Please fill What should we call you.`);
      return false;
    }
    // else if (signUpState.agreedTandC === false) {
    //   toast.error(`Please verify the marketing messages.`);
    //   return false;
    // }
    return true;
  };

  const updateStatus = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case `email`:
        setSignUpState({ ...signUpState, email: value });
        break;

      case `confirm-email`:
        setSignUpState({ ...signUpState, confirmEmail: value });
        break;

      case `password`:
        setSignUpState({ ...signUpState, password: value });
        break;

      case `nick-name`:
        setSignUpState({ ...signUpState, nickName: value });
        break;

      case `gender`:
        setSignUpState({ ...signUpState, gender: value });
        break;

      // case `remember-me`:
      //   setSignUpState({ ...signUpState, agreedTandC: value });
      //   break;

      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="section_sign_up">
        <div className="logo_container">
          <img src={Logo} alt="Logo" />
        </div>

        <hr />

        <div className="form_area">
          <form onSubmit={submitHandler}>
            <div className="form_container">
              <div className="control_container">
                <label className="lbl_control">What's your email?</label>
                <input
                  type="text"
                  name="email"
                  className="input_control"
                  value={signUpState.email}
                  placeholder="Email your email."
                  onChange={updateStatus}
                />
              </div>

              <div className="control_container">
                <label className="lbl_control">Confirm your email</label>
                <input
                  type="text"
                  name="confirm-email"
                  className="input_control"
                  value={signUpState.confirmEmail}
                  placeholder="Enter your email again."
                  onChange={updateStatus}
                />
              </div>

              <div className="control_container">
                <label className="lbl_control">Create a password</label>
                <input
                  type="password"
                  name="password"
                  className="input_control"
                  value={signUpState.password}
                  placeholder="Create a password."
                  onChange={updateStatus}
                />
              </div>

              <div className="control_container">
                <label className="lbl_control">What should we call you?</label>
                <input
                  type="text"
                  name="nick-name"
                  className="input_control"
                  value={signUpState.nickName}
                  placeholder="Enter a profile name."
                  onChange={updateStatus}
                />
              </div>

              <div className="radio_input_control">
                <label className="lbl_control">What's your gender?</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="radio_control"
                  onChange={updateStatus}
                  checked={signUpState.gender === "male"}
                />
                <label htmlFor="male" className="radio_lbl">
                  Male
                </label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="radio_control"
                  onChange={updateStatus}
                  checked={signUpState.gender === "female"}
                />
                <label htmlFor="female" className="radio_lbl">
                  Female
                </label>

                <input
                  type="radio"
                  id="transgender"
                  name="gender"
                  value="transgender"
                  className="radio_control"
                  onChange={updateStatus}
                  checked={signUpState.gender === "transgender"}
                />
                <label htmlFor="transgender" className="radio_lbl">
                  Non-binary
                </label>
              </div>

              {signUpState.agreedTandC}

              <div className="remember_me_container">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember_me"
                  className="chkbox_input"
                  checked={signUpState.agreedTandC}
                  onChange={updateStatus}
                />
                <label htmlFor="remember_me" className="chkbox_lbl">
                  I would prefer not to receive marketing messages from MyTune.
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
                <button
                  type="button"
                  className="btn btn_signup"
                  onClick={() => navigate(`/login`)}
                >
                  Sign in for MyTune
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

export default SignUp;
