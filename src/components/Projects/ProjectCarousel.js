import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProjectsArray from "./Projects";

import "./Projects.css";
import "../../App.css";

const ProjectCarousel = () => {
  return (
    <section className="projectSection">
      <div className="container projectContainer">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-10 fw-bold text-center projectHeader">
              <span className="headerFlare">.</span>Projects
              <span className="headerFlare">()</span>
            </h1>
          </div>
          <div className="col-8-md">
            <Carousel fade className="projectCarousel">
              {ProjectsArray.map((project) => (
                <Carousel.Item key={project.id}>
                  <img
                    className="d-block w-100"
                    src={project.gif}
                    alt={project.name}
                  />
                  <Carousel.Caption className="projectCaption">
                    <span>
                      <h3 className="projectInfo me-2">{project.name}</h3>
                      <p className="projectInfo">
                        <a
                          href={project.gitHubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="GitHub repository"
                          className="gitHubLink me-2"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Project link"
                          className="projectLink"
                        >
                          <i className="fas fa-project-diagram"></i>
                        </a>
                      </p>
                    </span>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
