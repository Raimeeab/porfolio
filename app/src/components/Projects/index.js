import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProjectsArray from "./Projects";

import "../../App.css"

const ProjectCarousel = () => {
  return (
    <Carousel fade className="projectCarousel">
      {ProjectsArray.map((project) => (
        <Carousel.Item key={project.id}>
          <img className="d-block w-100" src={project.gif} alt={project.name} />
          <Carousel.Caption className="projectCaption">
            <h3 className="projectName">{project.name}</h3>
            <p>
              GitHub <a href={project.gitHubLink} target="_blank">repository</a>
            </p>
            <p>Project <a href={project.projectLink}>Link</a></p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
