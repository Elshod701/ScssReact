import React from "react";
import "./Footer.scss";
import logo from "../../assets/footer-logo.svg";
import socials from "../../assets/socials.svg";

const Footer = () => {
  return (
    <>
      <div className="container">
        footer
        <div className="footer-wrapper">
          <div className="footer-icons">
            <img src={logo} alt="" />
            <div>
              <img src={socials} alt="" />
            </div>
          </div>
          <div className="footer-menu-1">
            <ul className="footer-menu-1-list">
              <li className="footer-menu-1-list-item">
                <a href="#">Home</a>
              </li>
              <li className="footer-menu-1-list-item">
                <a href="#">Pricing</a>
              </li>
              <li className="footer-menu-1-list-item">
                <a href="#">Products</a>
              </li>
              <li className="footer-menu-1-list-item">
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu-2">
            <ul className="footer-menu-2-list">
              <li className="footer-menu-2-list-item">
                <a href="#">Careers</a>
              </li>
              <li className="footer-menu-2-list-item">
                <a href="#">Community</a>
              </li>
              <li className="footer-menu-2-list-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-form">
            <form action="#">
              <input
                className="footer-input"
                type="text"
                placeholder="Updates in your inbox…"
              />
              <button className="footer-btn" type="submit">
                Go
              </button>
            </form>
            <p className="copyright">Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
