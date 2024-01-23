import React from "react";
import Button from "../../Components/Button/Button";
import balonchik from "../../assets/balonchik.svg";

import "./Intro.scss";

const Intro = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <h1 className="left-title">
            Bring everyone together to build better products.
          </h1>
          <p className="left-desc">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button>Get started</Button>
        </div>
        <div className="right">
          <img src={balonchik} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
