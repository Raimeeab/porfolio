import React from "react";
import profilePic from "../assets/profile.jpeg";

function About() {
  return (
    <div className="about my-5">
        <img src={profilePic} className="w-25 h-25"></img>
      <p>
        Hello, I'm Raimee. Ambitious Junior Software Engineer skilled at
        collaborating with customers, colleagues and project managers in a
        deadline-driven environment where sound work ethic is paramount.
        Well-versed in the complete software development life cycle. Proficient
        in producing and testing code with diverse front- and back-end
        technology resources, specializing in JavaScript and CSS.
      </p>
    </div>
  );
}

export default About;
