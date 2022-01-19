import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import "./Contact.css";
import "../../App.css";

const Contact = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <Form className="formContainer">
        <h1 className="mt-10 fw-bold text-center">
          <span className="headerFlare">.</span>Contact
          <span className="headerFlare">()</span>
        </h1>
        <Form.Group className="formGroup" controlId="formGroupName">
          <FloatingLabel
            className="formLabel my-2"
            controlId="floatingName"
            label="Name"
          >
            <Form.Control
              className="formControl"
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            className="formLabel my-2"
            controlId="floatingEmail"
            label="email"
          >
            <Form.Control
              className="formControl"
              type="email"
              placeholder="email"
            />
          </FloatingLabel>
          <FloatingLabel
            className="formLabel"
            controlId="floatingInput"
            label="enquiry"
          >
            <Form.Control
              className="formControl"
              as="textarea"
              placeholder="enquiry"
            />
          </FloatingLabel>
        </Form.Group>
        <div className="container">
          <div className="col-md-12 text-center">
            <Button variant="dark" className="btn-lg submitBtn">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
