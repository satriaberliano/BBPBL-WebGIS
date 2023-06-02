import React from "react";
import fishImage from "../assets/fish-underwater.jpg";
import paperMap from "../assets/paper-map.png";
import bbpblMap from "../assets/bbpbl-map.png";
import { IoMdNavigate } from "react-icons/io";

function Home() {
  const navigateMap = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="home-container">
        <div className="home-container_item">
          <div className="home-container_item-image">
            <img src={fishImage} alt="fish in sea"></img>
          </div>
          <div className="home-container_item-text">
            <h4>BBPBL</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
        <div className="home-container_item">
          <div className="home-container_item-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="home-container_item-image">
            <img src={paperMap} alt="people show paper map"></img>
          </div>
        </div>
        <div className="home-container_item">
          <div className="home-container_item-image">
            <img src={bbpblMap} alt="bbpbl map"></img>
          </div>
          <div className="home-container_item-text">
            <h4>Kunjungi Kami!</h4>
            <p>
              Jl. Yos Sudarso, Hanura, Kecamatan Teluk Pandan, Kabupaten
              Pesawaran, Lampung 35450
            </p>
            <button
              onClick={() =>
                navigateMap("https://goo.gl/maps/H2ujD1QTPth2TEcT6")
              }
            >
              <IoMdNavigate /> Navigasi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
