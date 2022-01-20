import React from "react";
import profilePic from "../../assets/profile.jpeg";
import Accordion from "react-bootstrap/Accordion";

import "./About.css";
import "../../App.css";

const technicalSkillList = [
  { id: 1, name: "Computer Science applied to JavaScript" },
  { id: 2, name: "jQuery" },
  { id: 3, name: "Handlebars" },
  { id: 4, name: "Advanced CSS & HTML5" },
  { id: 5, name: "Bootstrap & Foundation" },
  { id: 6, name: "Command-line fundamentals" },
  // { id: 7, name: "Unit testing and deployment with Jest" },
  // { id: 8, name: "Express.js" },
  // { id: 9, name: "Node" },
  // { id: 10, name: "Inquirer" },
  // { id: 11, name: "GitHub and GitLab applications" },
  // { id: 12, name: "Heroku" },
  // { id: 13, name: "API interactions" },
  // { id: 14, name: "Server-side Developments" },
  // { id: 15, name: "Databases: MySQL & MongoDB" },
  // { id: 16, name: "Sequelize" },
  // { id: 17, name: "Mongoose" },
];

const education =`  
Certificate in Full Stack Web Development
University of Sydney | Sydney NSW
Theory and application of web development

Bachelor of Media Communications: Marketing & Film
Notre Dame University | Sydney NSW`;


const About = () => {

  return (
    <section>
      <div className="container my-2 py-1">
        <div className="row mb-5">
          <div className="col-12">
          <h1 className="mt-10 fw-bold text-center"><span className="headerFlare">.</span>About<span className="headerFlare">()</span></h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img src={profilePic} width="100%" className="img-responsive" alt="Profile"></img>
          </div>
          <div className="col-sm-12 col-md-6">
            <p className="mb-4 pt-40">
              Hello, I'm Raimee. Ambitious Junior Software Engineer skilled at
              collaborating with customers, colleagues and project managers in a
              deadline-driven environment where sound work ethic is paramount.
              Well-versed in the complete software development life cycle.
              Proficient in producing and testing code with diverse front- and
              back-end technology resources, specializing in JavaScript and CSS.
            </p>
            <Accordion className="accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="techHeader">Technical Skills</Accordion.Header>
                <Accordion.Body className="techBody">
                    {technicalSkillList.map((skills) => (
                      <pre className="skillItems" key={skills.id}>{skills.name}</pre>
                    ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item defaulteventkey="1">
                <Accordion.Header className="edHeader">Education</Accordion.Header>
                <Accordion.Body>
                  <pre className="edBody">{education}</pre>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
