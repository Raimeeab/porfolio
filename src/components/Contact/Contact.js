import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import "./Contact.css";
import "../../App.css";

const Contact = () => {
  // Form object will hold a key-value pair for each of our form fields
  const [form, setForm] = useState({});
  // Errors object will hold a key-value pair for each erro
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { name, email, enquiry } = form;
    const newErrors = {};

    // name errors
    if (!name || name === " ") newErrors.name = "Field is required";
    else if (name.length > 30) newErrors.name = "Name is too long";

    // email errors
    if (!email || email === " " || RegExp(`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`).test(email))
      newErrors.email = "Field is required";

    // enquiry erros
    if (!enquiry || enquiry === " " ) newErrors.enquiry = "Field is required"


    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors - checks if object has any key-value pairs
      alert("Thank you, enquiry has been sent");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <Form className="formContainer" onSubmit={handleSubmit}>
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
              type="name"
              onChange={(e) => setField("name", e.target.value)}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
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
              onChange={(e) => setField("email", e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
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
              onChange={(e) => setField("enquiry", e.target.value)}
              isInvalid={!!errors.enquiry}
            />
            <Form.Control.Feedback type="invalid">
              {errors.enquiry}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <div className="container">
          <div className="col-md-12 text-center">
            <Button variant="dark" className="btn-lg submitBtn" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
