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
  },
  paddingStyle: {
    padding: "0 2px",
  },
};

const Footer = () => {
  return (
    <Footer styles={styles.display}>
      {icons.map((i) => (
        <a href={i.link} key={i.name} styles={styles.padding}>
          <i className={i.name}></i>
        </a>
      ))}
    </Footer>
  );
};

export default Footer;
