import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import "./Home.css";

// Font awesome names
const icons = [
  {
    // GitHub
    name: "fab fa-github",
    link: "https://github.com/Raimeeab",
  },
  {
    // LinkedIm
    name: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/raimee-abbassi-089118158/",
  },
  {
    // Resume
    name: "far fa-file-pdf",
    link: "https://drive.google.com/file/d/1VjtEpchFvZx1x-sDdcQo-A6yF6YXd6lO/view?usp=sharing",
  },
];

const styles = {
  displayStyle: {
    display: "flex-row",
    justifyContent: "center",
  },
  paddingStyle: {
    padding: "0 2px",
  },
};

const Home = () => {

  const flareText = ".is() {"
  const flareText2 = "}"
  return (
    <div>
      <h1 className="text-center pt-20">
        raimee<span>{flareText}</span>
      </h1>
      <p className="text-center" id="fullName"> <span id="const">const</span><span id="vName"> name</span> <span id="equal">=</span> "Raimee Abbassi"</p>
      <p className="text-center"> function Creative Full Stack Engineer();</p>
      <p></p>
      <div className="d-flex justify-content-center">
        <div className="d-flex">
          {icons.map((i) => (
            <a href={i.link} key={i.name} style={styles.paddingStyle} target="_blank">
              <i className={i.name}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
