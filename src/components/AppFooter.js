import React from "react";
import logo from "../assets/bbpbl_logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function AppFooter() {
  return (
    <footer>
      <div className="footer-app">
        <div className="footer_container">
          <div className="footer_company">
            {/* <div className="footer_company-info"> */}
            <div className="footer_company-logo">
              <img src={logo} alt=""></img>
            </div>
            <div className="footer_company-title">
              <p>Balai Besar Perikanan Budidaya Laut</p>
            </div>
            {/* </div> */}
            <div className="footer_company-desc">
              <p>
                Balai Budidaya Perikanan Laut Lampung (BBPBL) merupakan sebuah
                institusi di Lampung yang fokus pada pengembangan perikanan
                tangkap dan perikanan budidaya.
              </p>
            </div>
          </div>
          <div className="footer_info">
            <ul>
              <li>
                <div className="footer_info-item">
                  <div className="footer_info-item-icon">
                    <MdLocationOn />
                  </div>
                  <div className="footer_info-item-text">
                    Jl. Yos Sudarso, Hanura, Kecamatan Teluk Pandan, Kabupaten
                    Pesawaran, Lampung 35450
                  </div>
                </div>
              </li>
              <li>
                <div className="footer_info-item">
                  <div className="footer_info-item-icon">
                    <MdEmail />
                  </div>
                  <div className="footer_info-item-text">
                    bbpbl.lampung@gmail.com
                  </div>
                </div>
              </li>
              <li>
                <div className="footer_info-item">
                  <div className="footer_info-item-icon">
                    <MdPhone />
                  </div>
                  <div className="footer_info-item-text">+62-812-942-083</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_social-media">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/bbpbllampung"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/BBLLampung"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://kkp.go.id/djpb/bbpbllampung"
                target="_blank"
                rel="noreferrer"
              >
                <TbWorld />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
