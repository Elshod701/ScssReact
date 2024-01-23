import React from "react";
import Button from "../../Components/Button/Button";
import "./Discuss.scss";

const Discuss = () => {
  return (
    <section>
      <div className="container">
        <div className="discuss-wrapper">
          <h1 className="discuss-title">What they’ve said</h1>

          <div className="cards-wrapper">
            <div className="dis-card">
              <img className="img" src="./face.svg" alt="" />
              <h3 className="dis-card-title">Anisha Li</h3>
              <p className="dis-card-desc">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            <div className="dis-card">
              <img className="img" src="./face.svg" alt="" />
              <h3 className="dis-card-title">Anisha Li</h3>
              <p className="dis-card-desc">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            <div className="dis-card">
              <img className="img" src="./face.svg" alt="" />
              <h3 className="dis-card-title">Anisha Li</h3>
              <p className="dis-card-desc">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
          <div className="for_btn">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discuss;
