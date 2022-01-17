import React from "react";
import profilePic from "../assets/profile.jpeg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "../App.css";

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
    <div className="about my-5">
      <img src={profilePic} className="w-25 h-25 profile"></img>
      <p>
        Hello, I'm Raimee. Ambitious Junior Software Engineer skilled at
        collaborating with customers, colleagues and project managers in a
        deadline-driven environment where sound work ethic is paramount.
        Well-versed in the complete software development life cycle. Proficient
        in producing and testing code with diverse front- and back-end
        technology resources, specializing in JavaScript and CSS.
      </p>
      <div className="mb-2">
        <DropdownButton
          key="end"
          id="dropdown-button-drop-end"
          drop="end"
          variant="dark"
          title="Technical Skills"
        ></DropdownButton>
      </div>
      <div className="mb-2">
        <DropdownButton
          key="end"
          id="dropdown-button-drop-end"
          drop="end"
          variant="dark"
          title="Work Experience"
        ></DropdownButton>
      </div>
    </div>
  );
};

export default About;
