import React from "react";
import "./../../../styling/header.scss";

import Logo from "./../../../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="section_main_header">
        <div className="navigation_container">
          <div className="logo_sec">
            <div className="logo_area">
              <img
                src={Logo}
                className="logo"
                alt="Logo"
                onClick={() => navigate(`/`)}
              />
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
                <NavLink to="/signup" className="nav_link">
                  Sign up
                </NavLink>
              </div>
              <div className="a_nav">
                <NavLink to="/login" className="nav_link">
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
