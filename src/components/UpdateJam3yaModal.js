import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import jam3yaStore from "../stores/Jam3yaStore";

export default function UpdateJam3yaModal(props) {
  const [jam3ya, setJam3ya] = useState({
    id: props.jam3ya.id,
    username: props.jam3ya.username,
    password: props.jam3ya.password,
    Email: props.jam3ya.Email,
  });
  const handleChange = (event) => {
    setJam3ya({ ...jam3ya, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    jam3yaStore.updateJam3ya(jam3ya);
    props.closeModal();
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update jam3ya</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>username</InputGroup.Text>
            <Form.Control
              value={jam3ya.username}
              type="text"
              name="username"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>password</InputGroup.Text>
            <Form.Control
              value={jam3ya.password}
              type="text"
              name="password"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control
              type="text"
              name="Email"
              onChange={handleChange}
              value={jam3ya.Email}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Update jam3ya
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
