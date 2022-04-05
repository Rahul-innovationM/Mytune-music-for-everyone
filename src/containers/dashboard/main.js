import React from "react";
import "./../../styling/main.scss";

const Main = (props) => {
  console.log(props.songs);

  return (
    <>
      <main>
        <div className="section_dashboard">
          {/* ========================= Trending Now ========================= */}
          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Trending Now</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              {props.songs.map((song, index) => {
                if (index < 5) {
                  return (
                    <div
                      className="card_section"
                      onClick={() => props.selectedSong(song)}
                    >
                      <div className="image_container">
                        <img src={song.cover} alt="Card" className="card_img" />
                      </div>

                      <div className="title_container">
                        <h3 className="title">{song.name}</h3>
                      </div>
                      <div className="subtitle_container">
                        <h5 className="subtitle">{song.artist}</h5>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* ========================= Fresh new music ========================= */}

          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Fresh new music</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              <div className="dashboard_header">
                {props.songs.map((song, index) => {
                  if (5 <= index && index < 10) {
                    return (
                      <div
                        className="card_section"
                        onClick={() => props.selectedSong(song)}
                      >
                        <div className="image_container">
                          <img
                            src={song.cover}
                            alt="Card"
                            className="card_img"
                          />
                        </div>

                        <div className="title_container">
                          <h3 className="title">{song.name}</h3>
                        </div>
                        <div className="subtitle_container">
                          <h5 className="subtitle">{song.artist}</h5>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          {/* ========================= Indie Music ========================= */}
          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Indie Music</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              <div className="dashboard_header">
                {props.songs.map((song, index) => {
                  if (10 <= index && index < 15) {
                    return (
                      <div
                        className="card_section"
                        onClick={() => props.selectedSong(song)}
                      >
                        <div className="image_container">
                          <img
                            src={song.cover}
                            alt="Card"
                            className="card_img"
                          />
                        </div>

                        <div className="title_container">
                          <h3 className="title">{song.name}</h3>
                        </div>
                        <div className="subtitle_container">
                          <h5 className="subtitle">{song.artist}</h5>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          {/* ========================= Hindi Top 50 ========================= */}
          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Hindi Top 50</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              <div className="dashboard_header">
                {props.songs.map((song, index) => {
                  if (15 <= index && index < 20) {
                    return (
                      <div
                        className="card_section"
                        onClick={() => props.selectedSong(song)}
                      >
                        <div className="image_container">
                          <img
                            src={song.cover}
                            alt="Card"
                            className="card_img"
                          />
                        </div>

                        <div className="title_container">
                          <h3 className="title">{song.name}</h3>
                        </div>
                        <div className="subtitle_container">
                          <h5 className="subtitle">{song.artist}</h5>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          {/* ========================= Retro Hits ========================= */}
          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Retro Hits</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              <div className="dashboard_header">
                {props.songs.map((song, index) => {
                  if (20 <= index && index < 25) {
                    return (
                      <div
                        className="card_section"
                        onClick={() => props.selectedSong(song)}
                      >
                        <div className="image_container">
                          <img
                            src={song.cover}
                            alt="Card"
                            className="card_img"
                          />
                        </div>

                        <div className="title_container">
                          <h3 className="title">{song.name}</h3>
                        </div>
                        <div className="subtitle_container">
                          <h5 className="subtitle">{song.artist}</h5>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
