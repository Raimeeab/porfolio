import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import "./Resume.css";
import "../../App.css";
const Resume = () => {
  const technicalBackEnd = [
    { id: 1, name: "Nodejs" },
    { id: 2, name: "Express.js" },
    { id: 3, name: "Inquirer" },
    { id: 4, name: "Server-side Developments" },
    { id: 5, name: "API interactions" },
    { id: 6, name: "Databases: MySQL & MongoDB" },
    { id: 7, name: "Sequelize" },
    { id: 8, name: "Mongoose" },
    { id: 9, name: "PWAs" },
    { id: 10, name: "User Authentication" },
  ];

  const technicalFrontEnd = [
    { id: 1, name: "Computer Science applied to JavaScript" },
    { id: 2, name: "jQuery" },
    { id: 3, name: "Handlebars" },
    { id: 4, name: "Advanced CSS & HTML5" },
    { id: 5, name: "Bootstrap & Foundation" },
    { id: 6, name: "Command-line fundamentals" },
    { id: 7, name: "Unit testing and deployment with Jest" },
    { id: 8, name: "GitHub and GitLab applications" },
    { id: 9, name: "Heroku" },
    { id: 10, name: "React.js" },
  ];

  return (
    <div className="container my-2 py-1">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="mt-10 fw-bold text-center">
            <span className="headerFlare">.</span>Resume
            <span className="headerFlare">()</span>
          </h1>
        </div>
        <div className="row mb-5">
          <h2 className="text-center resumeHeader">Education</h2>
          <div className="col-sm-12 col-md-6 p-20">
            <div className="text-center edTitle">
              Certificate in Full Stack Web Development
            </div>
            <div className="text-center edLocation">
              University of Sydney | Sydney NSW
            </div>
            <div className="text-center edDesc">
              Theory and application of web development
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="text-center edTitle">
              Bachelor of Media Communications
            </div>
            <div className="text-center edLocation">
              Notre Dame University | Sydney NSW
            </div>
            <div className="text-center edDesc">
              Double major in Marketing & Film Production
            </div>
          </div>
        </div>
        <div className="row mb-5 pt-10">
          <h2 className="text-center resumeHeader">Technical Skills</h2>
          <div className="col-sm-12 col-md-6">
            <ListGroup variant="flush">
              {technicalFrontEnd.map((skills) => {
                return (
                  <ListGroup.Item
                    className="skillItems text-center"
                    key={skills.id}
                  >
                    {skills.name}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>
          <div className="col-sm-12 col-md-6">
            <ListGroup variant="flush">
              {technicalBackEnd.map((skills) => {
                return (
                  <ListGroup.Item
                    className="skillItems text-center"
                    key={skills.id}
                  >
                    {skills.name}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>
        </div>
        <div className="container">
          <div className="col-md-12 text-center">
            <Button variant="dark" className="btn-lg submitBtn ml-20">
              <a
                href="https://drive.google.com/file/d/1VjtEpchFvZx1x-sDdcQo-A6yF6YXd6lO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="far fa-file-pdf"></i> Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
