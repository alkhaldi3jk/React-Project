import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import Jam3yaStore from "../stores/Jam3yaStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateJam3ya(props) {
  const [jam3ya, setJam3ya] = useState({
    title: "",
    image: "",
    amount: 0,
    limit: 0,
    startDate: "",
    endDate: "",
  });
  const handleChange = (e) => {
    setJam3ya({ ...jam3ya, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Jam3yaStore.createjam3ya(jam3ya);
    console.log(jam3ya);
    // props.closeModal(); // this is to close the modal that is shown
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Create Jam3ya
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create Jam3ya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>title</InputGroup.Text>
              <Form.Control type="text" name="title" onChange={handleChange} />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>image</InputGroup.Text>
              <Form.Control type="text" name="image" onChange={handleChange} />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>amount</InputGroup.Text>
              <Form.Control
                type="number"
                name="amount"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text>limit</InputGroup.Text>
              <Form.Control
                type="number"
                name="limit"
                onChange={handleChange}
              />
            </InputGroup>
            <DatePicker
              selected={jam3ya.startDate}
              onChange={(date) => setJam3ya({ ...jam3ya, startDate: date })}
            />
            Start Date
            <InputGroup>
              <DatePicker
                selected={jam3ya.endDate}
                onChange={(date) => setJam3ya({ ...jam3ya, endDate: date })}
              />
              End Date
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
