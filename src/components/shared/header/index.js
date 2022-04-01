import React from "react";
import "./../../../styling/header.scss";

import Logo from "./../../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="section_header">
        <div className="navigation_container">
          <div className="logo_sec">
            <div className="logo_area">
              <img src={Logo} className="logo" alt="Logo" />
            </div>
          </div>
          <div className="nav_sec">
            <div className="nav_area">
              <div className="a_nav">
                <a href="/#" className="nav_link">
                  Support
                </a>
              </div>
              <div className="a_nav">
                <a href="/#" className="nav_link">
                  Sign up
                </a>
              </div>
              <div className="a_nav">
                <a href="/#" className="nav_link">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
