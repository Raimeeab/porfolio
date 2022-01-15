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
    link: "",
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

const Footer = () => {
  return (
    <div className="d-flex justify-content-center">
      <footer className="d-flex">
        {icons.map((i) => (
          <a href={i.link} key={i.name} style={styles.paddingStyle}>
            <i className={i.name}></i>
          </a>
        ))}
      </footer>
    </div>
  );
};

export default Footer;
