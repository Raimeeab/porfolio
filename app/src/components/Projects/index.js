import React from "react";
import Carousel from "react-bootstrap/Carousel";

// Imported gifs/images
import employeeTrackerGif from "../../assets/employee-tracker.gif"; 
import artHouseGif from "../../assets/arthouse-demo.gif";
import socialNetworkGif from "../../assets/social-network-api.gif";


const ProjectCarousel = () => {
  const projects = [
    {
      id: 1,
      name: "Employee Tracker",
      gitHubLink: "https://github.com/Raimeeab/Employee-Tracker",
      gif: employeeTrackerGif,
      projectLink:
        "https://drive.google.com/file/d/1f9POlZZEaAbdJOCRE920kQa88Ex8XPc2/view?usp=sharing",
    },
    {
      id: 2,
      name: "Social Network API",
      gitHubLink: "https://github.com/Raimeeab/social-network-api",
      gif: socialNetworkGif,
      projectLink:
        "https://drive.google.com/file/d/18mYEfZXHPbrh7vYTeFhbrXswXNRSFKJ1/view?usp=sharing",
    },
    {
      id: 3,
      name: "ArtHouse Project",
      gitHubLink: "https://github.com/Raimeeab/arthouse-project",
      gif: artHouseGif,
      projectLink: "https://raimeeab.github.io/arthouse-project/",
    },
  ];

  return (
    <Carousel fade>
      {projects.map(project => (
         <Carousel.Item key={project.id}>
         <img
           className="d-block w-100"
           src={project.gif}
           alt={project.name}
         />
         <Carousel.Caption>
           <h3>{project.name}</h3>
           <p>GitHub <a href={project.gitHubLink}>repository</a></p>
         </Carousel.Caption>
       </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
