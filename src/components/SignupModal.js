import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
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
      <Modal.Dialog className="signin">
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
          <Button variant="outline-success" onClick={handleShow}>
            New User
          </Button>
          <Button variant="outline-success" onClick={handleSignin}>
            signIn
          </Button>
        </Modal.Footer>
      </Modal.Dialog>

      <Button variant="outline-success" onClick={handleShow}>
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
          <Button variant="outline-success" onClick={handleSubmit}>
            signIn
          </Button>
          <Button variant="outline-success" onClick={handleSubmit}>
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
