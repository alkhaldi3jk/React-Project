import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import authStore from "../stores/authStore";

export default function SignupModal(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    // props.signIn
    //   ? authStore.logging(user, "signIn")
    //   : authStore.logging(user, "signUp");
  };
  const handleSignin = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Signin</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={authStore.logout}>
            New User
          </Button>
          <Button variant="primary" onClick={handleSignin}>
            signIn
          </Button>
        </Modal.Footer>
      </Modal.Dialog>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <input name="email" placeholder="email" onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubmit}>
            signIn
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal
      show={props.isOpen}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="Enter your username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Enter your email"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleSubmit}>
          {props.signIn ? "Sign in" : "Sign up"}
        </Button>
        <Button variant="warning" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal> */}
    </>
  );
}
