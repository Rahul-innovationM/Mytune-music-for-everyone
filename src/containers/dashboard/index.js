import React, { useEffect, useState } from "react";
import Artist from "./artist";
import ArtistDetail from "./artistDetails";
import BrowseCategory from "./browseCategory";

import DashboardHeader from "./dashboardHeader";
import Main from "./main";
import SideMenu from "./sideMenu";
import Songs from "./../songs/index";

import SongsList from "./../songs/data";
import LikedSongs from "./likedSongs";

const Dashboard = () => {
  const [isMain, setIsMain] = useState(true);
  const [isArtist, setIsArtist] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isArtistDetails, setIsArtistDetails] = useState(false);
  const [isSongsPlay, setIsSongPlay] = useState(false);

  const [songsList, setSongsList] = useState([]);
  const [currentSelectedSong, setCurrentSelectedSong] = useState({});
  const [currentSelectedArtist, setCurrentSelectedArtist] = useState("");

  const setStateHandler = (arg) => {
    setIsMain(arg[0]);
    setIsArtist(arg[1]);
    setIsCategory(arg[2]);
    setIsArtistDetails(arg[3]);
    setIsSongPlay(arg[4]);
  };

  const changeScreenHandler = (label) => {
    if (label === `Home`) {
      setStateHandler([true, false, false, false, false]);
    } else if (label === `Artists`) {
      setStateHandler([false, true, false, false, false]);
    } else if (label === `Category`) {
      setStateHandler([false, false, true, false, false]);
    }
  };

  const selectedArtistHandler = (lbl) => {
    setStateHandler([false, false, false, true, false]);
    setCurrentSelectedArtist(`${lbl}`);
  };

  const selectedSongHandler = (song) => {
    setStateHandler([false, false, false, false, true]);
    setCurrentSelectedSong(song);
  };

  useEffect(() => {
    console.log();
    setSongsList(SongsList());
  }, []);

  return (
    <>
      <DashboardHeader />

      {isMain && <Main songs={songsList} selectedSong={selectedSongHandler} />}
      {isArtist && <Artist clicked={selectedArtistHandler} />}
      {isCategory && <BrowseCategory />}
      {isArtistDetails && <ArtistDetail show={currentSelectedArtist} />}
      {isSongsPlay && (
        <Songs allSongs={songsList} selectedSong={currentSelectedSong} />
      )}

      {/* <LikedSongs /> */}

      <SideMenu
        clicked={changeScreenHandler}
        currentActiveMenu={{ isMain, isArtist, isCategory }}
      />
    </>
  );
};

export default Dashboard;
