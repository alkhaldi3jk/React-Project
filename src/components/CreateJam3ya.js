import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import Jam3yaStore from "../stores/Jam3yaStore";
import { observer } from "mobx-react";

export default function CreateJam3yaModal(props) {
  const [jam3ya, setJam3ya] = useState({
    username: "",
    password: "",
    Email: "",
  });
  const handleChange = (e) => {
    setJam3ya({ ...jam3ya, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Jam3yaStore.createjam3ya(jam3ya);
    console.log(Jam3yaStore);
    props.closeModal(); // this is to close the modal that is shown
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a jam3ya</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>username</InputGroup.Text>
            <Form.Control type="text" name="username" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>password</InputGroup.Text>
            <Form.Control type="text" name="password" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control type="text" name="Email" onChange={handleChange} />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Create room
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
