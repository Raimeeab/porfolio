import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <Form>
        <h3 className="align-center">Get in touch</h3>
        <Form.Group className="formGroup" controlId="formGroupName">
          <FloatingLabel
            className="formLabel my-3"
            controlId="floatingName"
            label="Name"
          >
            <Form.Control className="formControl" type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            className="formLabel my-3"
            controlId="floatingEmail"
            label="email"
          >
            <Form.Control className="formControl" type="email" placeholder="email" />
          </FloatingLabel>
          <FloatingLabel
            className="formLabel"
            controlId="floatingInput"
            label="enquiry"
          >
            <Form.Control className="formControl" as="textarea" placeholder="enquiry" />
          </FloatingLabel>
        </Form.Group>
      <Button variant="light" className="submitBtn">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;
