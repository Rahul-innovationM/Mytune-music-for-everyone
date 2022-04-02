import React from "react";
import "./../../styling/dashboardHeader.scss";
import SearchIcon from "./../../assets/images/search_song.png";
import UserIcon from "./../../assets/images/user.png";

const DashboardHeader = () => {
  return (
    <header>
      <div className="section_header">
        <div className="search_container">
          <input
            className="search_box"
            type="text"
            value=""
            placeholder="Artist, songs, or podcasts"
          />
          <img src={SearchIcon} alt="search icon" className="search_icon" />
        </div>

        <div className="profile_container">
          <div className="profile_img">
            <img src={UserIcon} alt="User" />
          </div>
          <div className="name_container">
            <p className="user_name">RAHUL KUMAR</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
