import React from "react";
import bbpblLogo from "../assets/bbpbl_logo.png";

function AboutPage() {
  return (
    <div className="about-container">
      <h3>Tentang Kami</h3>
      <div className="about-container_company">
        <div className="about-container_company-logo">
          <img src={bbpblLogo} alt="bbpbl logo"></img>
        </div>
        <div className="about-container_company-text">
          <h4>Deksripsi</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pharetra metus id ultricies rutrum. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Proin
            eleifend cursus ante, vel sollicitudin mauris sodales vitae. Mauris
            vitae augue metus. Suspendisse potenti.
          </p>
        </div>
      </div>
      <div className="about-container_duty">
        <div className="about-container_duty-vismis">
          <h4>Visi dan Misi</h4>
          <div className="about-container_duty-vission">
            <h5>Visi</h5>
            <p>
              Mewujudkan Balai Besar Perikanan Budidaya Laut Lampung Sebagai
              Penghasil Induk dan Benih Unggul, serta Teknologi Budidaya Laut
              Adaptif Terbesar di Indonesia
            </p>
          </div>
          <div className="about-container_duty-mission">
            <h5>Misi</h5>
            <ul>
              <li>Memproduksi Induk dan Benih Unggul Ikan Laut</li>
              <li>Melaksanakan Penerapan Teknologi Budidaya Laut</li>
              <li>Memproduksi Bibit Rumput Laut Kultur Jaringan</li>
              <li>Melaksanakan Pelayanan Laboratorium Uji</li>
              <li>
                Melaksanakan Diseminasi Induk dan Benih Ikan Laut Unggul serta
                Teknologi Budidaya Laut
              </li>
            </ul>
          </div>
        </div>
        <div className="about-container_duty-task">
          <h4>Tugas</h4>
          <p>
            BBPBL mempunyai tugas melaksanakan uji terap teknik dan kerjasama,
            pengelolaan produksi, pengujian laboratorium, mutu pakan, residu,
            kesehatan ikan dan lingkungan, serta bimbingan teknis perikanan
            budidaya laut.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
