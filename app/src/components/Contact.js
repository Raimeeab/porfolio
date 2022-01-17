import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

const Contact = () => {
  return (
    <Form>
      <h1>Get in touch</h1>
      <Form.Group className="mb-3" controlId="formGroupName">
        <FloatingLabel controlId="floatingName" label="Name">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="email">
          <Form.Control type="email" placeholder="email" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="enquiry">
          <Form.Control type="textarea" placeholder="enquiry" />
        </FloatingLabel>
      </Form.Group>
      <Button variant="light">Submit</Button>
    </Form>
  );
};

export default Contact;
