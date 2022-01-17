import React from "react";

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
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex">
        {icons.map((i) => (
          <a href={i.link} key={i.name} style={styles.paddingStyle}>
            <i className={i.name}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
