import React from "react";
import avatar from "../../assets/avatar.png"

import "./About.css";
import "../../App.css";

const About = () => {

  return (
    <section>
      <div className="container my-2 py-1">
        <div className="row mb-5">
          <div className="col-12">
          <h1 className="mt-10 fw-bold text-center"><span className="headerFlare">.</span>About<span className="headerFlare">()</span></h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <img src={avatar} width="100%" className="img-responsive" alt="Profile"></img>
          </div>
          <div className="col-sm-12 align-self-center col-md-6">
            <p className="mb-4 aboutMe">
              Hello, I'm Raimee. Ambitious Junior Software Engineer skilled at
              collaborating with customers, colleagues and project managers in a
              deadline-driven environment where sound work ethic is paramount.
              Well-versed in the complete software development life cycle.
              Proficient in producing and testing code with diverse front- and
              back-end technology resources, specializing in JavaScript and CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
