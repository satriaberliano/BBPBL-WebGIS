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
              Balai Budidaya Perikanan Laut Lampung (BBPBL) merupakan sebuah
              institusi di Lampung yang fokus pada pengembangan perikanan
              tangkap dan perikanan budidaya. BBPBL memiliki fasilitas dan area
              yang penting untuk kegiatan perikanan, dan untuk memaksimalkan
              pemanfaatan sumber daya tersebut, diperlukan sistem informasi yang
              efisien dan akurat. Penggunaan Sistem Informasi Geografis (SIG)
              menjadi sangat relevan dalam konteks ini, karena dapat membantu
              dalam pemetaan, pengorganisasian, dan penyajian informasi mengenai
              lokasi dan fasilitas BBPBL.
            </p>
          </div>
        </div>
        <div className="home-container_item">
          <div className="home-container_item-image">
            <img src={paperMap} alt="people show paper map"></img>
          </div>
          <div className="home-container_item-text">
            <p>
              Tujuan utama dari pengembangan aplikasi SIG untuk BBPBL adalah
              untuk memberikan pengunjung akses yang mudah dan informasi yang
              akurat tentang lokasi dan fasilitas yang tersedia di dalam area
              BBPBL. Aplikasi ini bertujuan untuk memberikan pemetaan area,
              informasi fasilitas dan area, serta informasi tambahan seperti jam
              operasional. Dengan adanya aplikasi ini, diharapkan pengunjung
              dapat dengan cepat dan efisien mendapatkan informasi yang mereka
              butuhkan dan mengoptimalkan kunjungan mereka ke BBPBL.
            </p>
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
