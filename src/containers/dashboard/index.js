import React, { useState } from "react";
import Artist from "./artist";
import ArtistDetail from "./artistDetails";
import BrowseCategory from "./browseCategory";

import DashboardHeader from "./dashboardHeader";
import Main from "./main";
import SideMenu from "./sideMenu";

const Dashboard = () => {
  const [isMain, setIsMain] = useState(true);
  const [isArtist, setIsArtist] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isArtistDetails, setIsArtistDetails] = useState(false);
  const [currentSelectedArtist, setCurrentSelectedArtist] = useState("");

  const changeScreenHandler = (label) => {
    if (label === `Home`) {
      setIsMain(true);
      setIsArtist(false);
      setIsCategory(false);
      setIsArtistDetails(false);
    } else if (label === `Artists`) {
      setIsMain(false);
      setIsArtist(true);
      setIsCategory(false);
      setIsArtistDetails(false);
    } else if (label === `Category`) {
      setIsMain(false);
      setIsArtist(false);
      setIsCategory(true);
      setIsArtistDetails(false);
    }
  };

  const selectedArtistHandler = (lbl) => {
    setIsMain(false);
    setIsArtist(false);
    setIsCategory(false);
    setCurrentSelectedArtist(`${lbl}`);
    setIsArtistDetails(true);
  };

  return (
    <>
      <DashboardHeader />

      {isMain && <Main />}
      {isArtist && <Artist clicked={selectedArtistHandler} />}
      {isCategory && <BrowseCategory />}
      {isArtistDetails && <ArtistDetail show={currentSelectedArtist} />}

      <SideMenu
        clicked={changeScreenHandler}
        currentActiveMenu={{ isMain, isArtist, isCategory }}
      />
    </>
  );
};

export default Dashboard;
