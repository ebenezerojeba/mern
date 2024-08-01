import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/whatsapp1.png";
import instagram from "../../assets/instagram1.png";
import gmail from "../../assets/gmail2.png";
import { assets } from "../../assets/assets";
import pal from "../../assets/pall.png";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={pal} alt="" className="logo" />
          <p>
            Stay Connected with Palatial Events: Follow Us for Updates and
            Inspiration
          </p>
          <div className="footer-social-icons">
            <Link to="https://wa.link/8xa2v2">
              <img src={whatsapp} alt="" />
            </Link>
            <Link to="https://www.instagram.com/palatialcaterers?igsh=MzRlODBiNWFlZA==">
              <img src={instagram} alt="" />
            </Link>
            <Link to="mailto:palatialevents@gmail.com">
              <img src={gmail} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              {" "}
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
            <Link to="/privacy-policy">Privacy Policy</Link>

            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>08143691712</li>
            <li>palatialevents@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        Copyright 2024 © Palatial - All rights reserved
      </div>

      <h6>
        {" "}
        Developed by{" "}
        <Link to="https://my-portfolio-4d973.web.app/">
          <span>Ojeba Ebenezer</span>
        </Link>
      </h6>
    </div>
  );
};

export default Footer;
