import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import "../../App.css";
const Resume = () => {
  //   const technicalBackEnd = [
  //     { id: 1, name: "Node" },
  //     { id: 2, name: "Express.js" },
  //     { id: 3, name: "Inquirer" },
  //     { id: 4, name: "Server-side Developments" },
  //     { id: 5, name: "API interactions" },
  //     { id: 6, name: "Databases: MySQL & MongoDB" },
  //     { id: 7, name: "Sequelize" },
  //     { id: 8, name: "Mongoose" },
  //     { id: 9, name: "PWAs" },
  //   ];

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
        <div className="row mb-5 pt-20">
          <h2 className="text-center">Education</h2>
          <div className="col-sm-12 col-md-6 p-20">
            <p className="text-center">
              Certificate in Full Stack Web Development <br />
              University of Sydney | Sydney NSW <br /> Theory and application of
              web development
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p className="text-center">
              Bachelor of Media Communications <br /> Notre Dame University |
              Sydney NSW <br /> Double major in Marketing & Film Production
            </p>
          </div>
        </div>
        <div className="row mb-5 pt-10">
          <h2 className="text-center">Technical Skills</h2>
          <div className="col-sm-12 col-md-6">
            <ListGroup variant="flush">
              {technicalFrontEnd.map((skills) => {
                <ListGroup.Item className="skillItems" key={skills.id} >
                  {skills.name}
                </ListGroup.Item>;
              })}
            </ListGroup>
          </div>
        </div>
        <Button variant="outline-primary" size="lg">
              Download Resume
        </Button>
      </div>
    </div>
  );
};

export default Resume;

// <Accordion className="accordion">
//                   <Accordion.Item defaulteventkey="0">

//                   </Accordion.Item>
//               </Accordion>

{/* <div className="col-sm-12 col-md-6">
  <h3>Technical Skills</h3>
  <ListGroup variant="flush">
    {technicalFrontEnd.map((skills) => {
      <ListGroup.Item className="skillItems" key={skills.id}>
        {skills.name}
      </ListGroup.Item>;
    })}
  </ListGroup>
</div>; */}
