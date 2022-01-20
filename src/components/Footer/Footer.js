import React from "react";
import "./Footer.css";

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
    name: "fab fa-instagram",
    link: "https://www.instagram.com/raii_me/",
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
    <section className="container">
      <div className="row mb-5">
        <div className="col-12 ">
          <h6 className=" d-flex justify-content-center">
            &copy; Raimee Abbassi <span className="year">[2022]</span>
          </h6>
          <div className="d-flex justify-content-center">
            <div>
              {icons.map((i) => (
                <a
                  href={i.link}
                  key={i.name}
                  style={styles.paddingStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icons"
                >
                  <i className={i.name}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
