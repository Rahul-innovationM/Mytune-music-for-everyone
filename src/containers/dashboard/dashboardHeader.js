import React, { useState } from "react";
import "./../../styling/dashboardHeader.scss";
import SearchIcon from "./../../assets/images/search_song.png";
import UserIcon from "./../../assets/images/user.png";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();

  const [searchTxt, setSearchTxt] = useState("");

  return (
    <header>
      <div className="section_header">
        <div className="search_container">
          <input
            className="search_box"
            type="text"
            value={searchTxt}
            placeholder="Artist, songs, or podcasts"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <img src={SearchIcon} alt="search icon" className="search_icon" />
        </div>

        <div className="profile_container">
          <div
            className="profile_img"
            onClick={() => navigate(`/profile-overview`)}
          >
            <img src={UserIcon} alt="User" />
          </div>
          <div
            className="name_container"
            onClick={() => navigate(`/profile-overview`)}
          >
            <p className="user_name">RAHUL KUMAR</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
