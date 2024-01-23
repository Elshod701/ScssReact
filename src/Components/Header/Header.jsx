import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";

const Index = () => {
  return (
    <>
        <div className="container">
          <nav id="nav">
            <div className="nav__logo">
            <a href="#"><img src={logo} alt="" /></a>
            </div>
            <ul id="nav__list">
              <li className="nav__list-item"><a href="#" className="nav__list-item--link">Pricing</a></li>
              <li className="nav__list-item"><a href="#" className="nav__list-item--link">Product</a></li>
              <li className="nav__list-item"><a href="#" className="nav__list-item--link">About Us</a></li>
              <li className="nav__list-item"><a href="#" className="nav__list-item--link">Careers</a></li>
              <li className="nav__list-item"><a href="#" className="nav__list-item--link">Community</a></li>
            </ul>
            <button id="nav__btn">Get Started</button>
          </nav>
        </div>
    </>
  );
};

export default Index;
