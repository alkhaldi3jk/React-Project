import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import authStore from "../stores/authStore";
function SigninModal() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSignin = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="outline-success" onClick={handleShow}>
        SignIn
      </Button>

      <Modal show={show} onHide={handleClose}>
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
          <Button variant="outline-success" onClick={handleSignin}>
            SignIn
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SigninModal;
