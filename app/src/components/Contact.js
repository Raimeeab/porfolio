import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import "../Components.css";

const Contact = () => {
  return (
    <div>
      <Form>
        <h1>Get in touch</h1>
        <Form.Group className="FormGroup" controlId="formGroupName">
          <FloatingLabel
            className="formLabel"
            controlId="floatingName"
            label="Name"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            className="formLabel"
            controlId="floatingEmail"
            label="email"
          >
            <Form.Control type="email" placeholder="email" />
          </FloatingLabel>
          <FloatingLabel
            className="formLabel"
            controlId="floatingInput"
            label="enquiry"
          >
            <Form.Control as="textarea" placeholder="enquiry" />
          </FloatingLabel>
        </Form.Group>
      </Form>
      <Button variant="light">Submit</Button>
    </div>
  );
};

export default Contact;
