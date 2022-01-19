import React from "react";
import profilePic from "../assets/profile.jpeg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./About.css";

const technicalSkillList = [
  "Computer Science applied to JavaScript",
  "jQuery",
  "Handlebars",
  "Advanced CSS & HTML5",
  "Bootstrap & Foundation ",
  "Command-line fundamentals",
  "Unit testing and deployment with Jest",
  "Express.js",
  "Node",
  "Inquirer",
  "GitHub and GitLab applications",
  "Heroku",
  "API interactions",
  "Server-side Developments",
  "Databases: MySQL & MongoDB",
  "Sequelize",
  "Mongoose",
];

const About = () => {
  const showMore = () => {};

  return (
    <section>
      <div className="container my-2 py-1">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="fw bold text-center">.About()</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img src={profilePic} width="100%" className="img-responsive" ></img>
          </div>
          <div className="col-sm-12 col-md-6">
            <p className="mb-4">
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
