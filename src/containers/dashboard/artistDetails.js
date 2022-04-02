import React from "react";
import "./../../styling/artistDetails.scss";
import ArtistDetails from "./../../utils/artistInfo.json";

import Alka from "./../../assets/images/Artists/akla.png";
import Ar from "./../../assets/images/Artists/ar .png";
import Arijit from "./../../assets/images/Artists/arjit.png";
import Atif from "./../../assets/images/Artists/atif.png";
import Darshan from "./../../assets/images/Artists/darshan.png";
import Diljeet from "./../../assets/images/Artists/diljeet.png";
import Guru from "./../../assets/images/Artists/guru.png";
import Harrdy from "./../../assets/images/Artists/harrdy.png";
import Jubin from "./../../assets/images/Artists/jubin.png";
import Lata from "./../../assets/images/Artists/lataji.png";
import Mika from "./../../assets/images/Artists/mika.png";
import Neeti from "./../../assets/images/Artists/neeti.png";
import Neha from "./../../assets/images/Artists/neha.png";
import Palak from "./../../assets/images/Artists/palak.png";
import Sachet from "./../../assets/images/Artists/sachet.png";
import Sharry from "./../../assets/images/Artists/sharry.png";
import Sonu from "./../../assets/images/Artists/sonu.png";
import Sunidhi from "./../../assets/images/Artists/sunidhi.png";
import Tulsi from "./../../assets/images/Artists/tulsi.png";
import Vishal from "./../../assets/images/Artists/vishal.png";
import Shreya from "./../../assets/images/Artists/sherya.png";

const ArtistDetail = (props) => {
  const profileImage = (name) => {
    switch (name) {
      case "Alka Yagnik":
        return Alka;

      case "A. R. Rahman":
        return Ar;

      case "Arijit Singh":
        return Arijit;

      case "Atif Aslam":
        return Atif;

      case "Darshan Raval":
        return Darshan;

      case "Guru Randhawa":
        return Guru;

      case "Diljit Dosanjh":
        return Diljeet;

      case "Harrdy Sandhu":
        return Harrdy;

      case "Jubin Nautiyal":
        return Jubin;

      case "Lata Mangeshkar":
        return Lata;

      case "Mika Singh":
        return Mika;

      case "Neeti Mohan":
        return Neeti;

      case "Neha Kakkar":
        return Neha;

      case "Palak Muchhal":
        return Palak;

      case "Sachet Tandon":
        return Sachet;

      case "Sharry Mann":
        return Sharry;

      case "Sonu Nigam":
        return Sonu;

      case "Sunidhi Chauhan":
        return Sunidhi;

      case "Shreya Ghoshal":
        return Shreya;

      case "Tulsi Kumar":
        return Tulsi;

      case "Vishal Mishra":
        return Vishal;

      default:
        return false;
    }
  };

  return (
    <main>
      <div className="section_artist_details">
        {ArtistDetails.map((artist) => {
          if (artist.name === props.show) {
            return (
              <div className="artist_details_container">
                <div className="artist_img_container">
                  <img src={profileImage(`${props.show}`)} alt="Darshan" />

                  <div className="like_container">
                    <span className="like_icon ">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
                <div className="artist_body">
                  <h1 className="artist_name">{artist.name}</h1>
                  <p className="artist_bio">{artist.bio}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </main>
  );
};

export default ArtistDetail;
