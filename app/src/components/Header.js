import React from "react";
import { Link } from "react-router-dom";

// About me, projects, Contact

const Navigation = () => {
  return (
    <div>
       <h1>Raimee <span>Abbassi</span></h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation; 