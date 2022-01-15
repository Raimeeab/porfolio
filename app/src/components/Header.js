import React from "react";
import { Link } from "react-router-dom";

// About me, projects, Contact

const Navigation = () => {
  return (
    <div>
       <h1><span>Raimee Abbassi</span>.is()</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About()</Link>
        </li>
        <li>
          <Link to="/projects">Projects()</Link>
        </li>
        <li>
          <Link to="/contact">Contact()</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation; 