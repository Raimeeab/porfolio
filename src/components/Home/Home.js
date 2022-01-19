import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <pre className="flare">
      <Typewriter
        className="flare pe-50"
        onInit={(typewriter) => {
          typewriter
          .pauseFor(2500)
          .typeString(
`const is = () => {
  let name = "Raimee Abbassi"; 
  creativeSoftwareEngineer();
};`)
            .pauseFor(1000)
            .start(2000);
        }}
      />
      </pre>
    </div>
  );
};

export default Home;