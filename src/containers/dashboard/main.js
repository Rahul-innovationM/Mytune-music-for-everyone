import React from "react";
import "./../../styling/main.scss";

import Pushpa from "./../../assets/images/trending/pushpa.jpg";
import Shershaan from "./../../assets/images/trending/shershaan.jpg";
import Atrangi from "./../../assets/images/trending/atrangii.jpg";
import eightyThree from "./../../assets/images/trending/83.jpg";
import BellBottom from "./../../assets/images/trending/bellbottom.jpg";

import Jalwanuma from "./../../assets/images/fresh/jalwanuma.jpg";
import Gold from "./../../assets/images/fresh/gold.jpg";
import Rawaan from "./../../assets/images/fresh/raavan.jpg";
import Mast from "./../../assets/images/fresh/mast nazron se.jpg";
import Reppe from "./../../assets/images/fresh/reppe.jpg";

import Roothe from "./../../assets/images/indie/roothe.jpg";
import Rehn from "./../../assets/images/indie/rehn.jpg";
import Pariyon from "./../../assets/images/indie/pariyon.jpg";
import Ehsaas from "./../../assets/images/indie/ehsaas.jpg";
import Doori from "./../../assets/images/indie/doori.jpg";

import Gangubai from "./../../assets/images/top50/gangubai.jpg";
import Baarish from "./../../assets/images/top50/baarish.jpg";
import Filhaal from "./../../assets/images/top50/filhaal.jpg";
import Jersey from "./../../assets/images/top50/jersey.jpg";
import Ranjha from "./../../assets/images/top50/ranjha.jpg";

import Abhi from "./../../assets/images/retro/Abhi Na Jao Chhod Kar.jpg";
import Apni from "./../../assets/images/retro/Apni To Jaise Taise.jpg";
import Dillagi from "./../../assets/images/retro/Dillagi Ne Di Hawa.jpg";
import Naseeb from "./../../assets/images/retro/Mere Naseeb Mein.jpg";
import Saathi from "./../../assets/images/retro/O Saathi Re.jpg";

const Main = () => {
  return (
    <>
      <main>
        <div className="section_dashboard">
          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Trending Now</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              <div className="card_section">
                <div className="image_container">
                  <img src={Pushpa} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Pushpa - The Rise</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Devi Sri Prasad</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Shershaan} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Shershaah</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Tanishk Bagchi</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Atrangi} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Atrangi Re</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">A. R. Rahman</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={eightyThree} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">83</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Pritam</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={BellBottom} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">BellBottom</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Tanishk Bagchi</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Fresh new music</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              <div className="card_section">
                <div className="image_container">
                  <img src={Jalwanuma} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Jalwanuma</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Pooja Tiwari</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Gold} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Gold Theme </h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Rajesh Murugesan</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Rawaan} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Keu Jaane Naa</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Arijit Singh</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Mast} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Mast Nazron Se</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Rochak Kohli</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Reppe} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Reppe Vese Loga </h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Harika Narayan</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Indie Music</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              <div className="card_section">
                <div className="image_container">
                  <img src={Roothe} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Roothe Hai Lamhe</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Sayam Qureshi</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Rehn} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Rehn De</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Merchant Records</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Pariyon} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Pariyon Jaisa Koi</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Ehsaas Band</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Ehsaas} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Ehsaas</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Ravator Music</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Doori} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Doori</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Atul Gupta</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Hindi Top 50</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              <div className="card_section">
                <div className="image_container">
                  <img src={Gangubai} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title"> Meri Jaan </h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Neeti Mohan </h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Filhaal} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title"> Filhaal2 Mohabbat </h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">B Praak</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Baarish} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title"> Baarish Ban Jaana </h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Payal Dev </h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Jersey} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title"> Maiyya Mainu </h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Sachet Tandon</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Ranjha} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title"> Ranjha</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Anvita Dutt</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard_container">
            <div className="heading_sec">
              <h1>Retro Hits</h1>
              <span className="see_more">more</span>
            </div>

            <div className="dashboard_header">
              <div className="card_section">
                <div className="image_container">
                  <img src={Abhi} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Abhi Na Jao Chhod Kar</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Saregama</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Apni} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Apni To Jaise Taise</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Saregama</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Dillagi} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Dillagi Ne Di Hawa</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Saregama</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Naseeb} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">Mere Naseeb Mein</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Saregama</h5>
                </div>
              </div>

              <div className="card_section">
                <div className="image_container">
                  <img src={Saathi} alt="Card" className="card_img" />
                </div>

                <div className="title_container">
                  <h3 className="title">O Saathi Re</h3>
                </div>
                <div className="subtitle_container">
                  <h5 className="subtitle">Saregama</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
