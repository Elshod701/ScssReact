import React from "react";
import Button from "../../Components/Button/Button";
import "./About.scss";

const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="about-wrapper">
            <div className="about-left">
              <h1 className="about-left-title">
                What’s different about Manage?
              </h1>
              <p className="about-left-desc">
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>
            <div className="about-right">
              <div className="item">
                <Button>01</Button>
                <div>
                  <h1 className="item-title">Track company-wide progress</h1>
                  <p className="item-desc">
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </div>
              </div>
              <div className="item">
                <Button>02</Button>
                <div>
                  <h1 className="item-title">Track company-wide progress</h1>
                  <p className="item-desc">
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </div>
              </div>
              <div className="item">
                <Button>03</Button>
                <div>
                  <h1 className="item-title">Track company-wide progress</h1>
                  <p className="item-desc">
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
