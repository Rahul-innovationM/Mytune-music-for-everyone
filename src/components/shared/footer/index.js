import React from "react";
import "./../../../styling/footer.scss";

import Logo from "./../../../assets/images/logo.png";
import facebookIcon from "./../../../assets/images/facebook.png";
import instagramIcon from "./../../../assets/images/instagram.png";
import twitterIcon from "./../../../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer>
      <div className="section_footer">
        <div className="upper_navigation_sec">
          <div className="part part_one">
            <div className="logo_container">
              <img src={Logo} className="img" alt="Logo" />
            </div>
          </div>

          <div className="part part_two">
            <div className="head">
              <p className="heading">Company</p>
            </div>
            <div className="navigation_container">
              <div className="nav_sec">
                <div className="nav">
                  <a className="nav_link" href="/#">
                    About
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Jobs
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    For the Record
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="part part_three">
            <div className="head">
              <p className="heading">COMMUNITIES</p>
            </div>
            <div className="navigation_container">
              <div className="nav_sec">
                <div className="nav">
                  <a className="nav_link" href="/#">
                    For Artists
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Developers
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Advertising
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Investors
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Vendors
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="part part_four">
            <div className="head">
              <p className="heading">USEFUL LINKS</p>
            </div>
            <div className="navigation_container">
              <div className="nav_sec">
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Support
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Web Player
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Free Mobile App
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="part part_five">
            <div className="section_social_media">
              <div className="media_sec">
                <a href="/#" className="media_link">
                  <img
                    src={instagramIcon}
                    alt="instagram"
                    className="media media_insta"
                  />
                </a>
              </div>
              <div className="media_sec">
                <a href="/#" className="media_link">
                  <img
                    src={twitterIcon}
                    alt="twitter"
                    className="media media_twitter"
                  />
                </a>
              </div>
              <div className="media_sec">
                <a href="/#" className="media_link">
                  <img
                    src={facebookIcon}
                    alt="facebook"
                    className="media media_facebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_navigation_sec">
          <div className="left_sec">
            <div className="navigation_container">
              <div className="nav_sec">
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Legal
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Privacy Center
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Privacy Policy
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    Cookies
                  </a>
                </div>
                <div className="nav">
                  <a className="nav_link" href="/#">
                    About Ads
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right_sec">
            <div className="country_section">
              <span className="country_icon"> </span>
              <span className="country_name">India (English)</span>
            </div>
            <div className="copyright_section">
              <span className="copyright_icon"> &copy; &nbsp;</span>
              <span className="copyright_name">2022 Spotify AB</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
