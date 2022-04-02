import React from "react";
import Footer from "../../../components/shared/footer";
import Header from "../../../components/shared/header";
import "./../../../styling/home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <div className="section_main">
          <div className="heading">
            <h1 className="a_heading">Listening is everything</h1>
          </div>
          <div className="subheading">
            <p className="a_subheading">
              Millions of songs and podcasts. No credit card needed.
            </p>
          </div>
          <div className="main_btn_container">
            <button className="btn btn_main" onClick={() => navigate(`/login`)}>
              Get MyTune Free
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

// A t digital

// Job alerts

// monster
// indeeed
// timesjobs

// L&T
