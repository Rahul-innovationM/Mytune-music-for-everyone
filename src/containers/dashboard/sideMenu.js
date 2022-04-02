import React from "react";
import "./../../styling/sideMenu.scss";

import Logo from "./../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faTimes,
  faSquarePersonConfined,
  faHeartCirclePlus,
  faArrowRightRotate,
} from "@fortawesome/free-solid-svg-icons";

const SideMenu = (props) => {
  const navigate = useNavigate();

  const clickedHandler = (label) => {
    props.clicked(label);
  };

  const logoutHandler = () => {
    navigate("/");
  };

  return (
    <aside>
      <div className="section_sidebar">
        <div className="image_container">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="side_menu_container">
          <div className="side_menus">
            <div
              className={`side_menu ${
                props.currentActiveMenu.isMain ? `active` : ``
              }`}
            >
              <span className="menu_icon">
                <i className="fa-solid fa-house-chimney"></i>
              </span>
              <div className="menu_text" onClick={() => clickedHandler("Home")}>
                Home
              </div>
            </div>

            <div className="side_menu">
              <span className="menu_icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <div className="menu_text">Search</div>
            </div>

            <div className="side_menu">
              <span className="menu_icon">
                <FontAwesomeIcon icon={faMusic} />
              </span>
              <div className="menu_text">Your Library</div>
            </div>

            <div
              className={`side_menu ${
                props.currentActiveMenu.isArtist ? `active` : ``
              }`}
            >
              <span className="menu_icon">
                <FontAwesomeIcon icon={faHeartCirclePlus} />
              </span>
              <div
                className="menu_text"
                onClick={() => clickedHandler("Artists")}
              >
                Artists
              </div>
            </div>

            <div
              className={`side_menu ${
                props.currentActiveMenu.isCategory ? `active` : ``
              }`}
            >
              <span className="menu_icon">
                <FontAwesomeIcon icon={faSquarePersonConfined} />
              </span>
              <div
                className="menu_text"
                onClick={() => clickedHandler("Category")}
              >
                Category
              </div>
            </div>

            <div className="side_menu">
              <span className="menu_icon">
                <i className="fa-solid fa-thumbs-up"></i>
              </span>
              <div className="menu_text">Liked Songs</div>
            </div>
          </div>

          <div className="menu_bottom_nav">
            <div className="side_menu">
              <span className="menu_icon">
                <FontAwesomeIcon icon={faArrowRightRotate} />
              </span>
              <div className="menu_text" onClick={logoutHandler}>
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
