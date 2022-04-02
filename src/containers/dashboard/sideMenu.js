import React from "react";
import "./../../styling/sideMenu.scss";

import Logo from "./../../assets/images/logo.png";
import HomeIcon from "./../../assets/images/home.jpeg";
import SearchIcon from "./../../assets/images/search.png";
import LibraryIcon from "./../../assets/images/library.jpeg";
import LikeIcon from "./../../assets/images/like.jpeg";

const SideMenu = () => {
  return (
    <aside>
      <div className="section_sidebar">
        <div className="image_container">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="side_menu_container">
          <div className="side_menus">
            <div className="side_menu">
              <span className="menu_icon">
                <i class="fa-solid fa-house-chimney"></i>
              </span>
              <div className="menu_text">Home</div>
            </div>

            <div className="side_menu">
              <span className="menu_icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <div className="menu_text">Search</div>
            </div>

            <div className="side_menu">
              <span className="menu_icon">&#x266C;</span>
              <div className="menu_text">Your Library</div>
            </div>
          </div>

          <div className="menu_bottom_nav">
            <div className="side_menu">
              <span className="menu_icon">
                {/* <img src={LikeIcon} alt="Home" href="/#" /> */}
                <i class="fa-solid fa-thumbs-up"></i>
              </span>
              <div className="menu_text">Liked Songs</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
