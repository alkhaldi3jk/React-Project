import React, { useState } from "react";
import jam3yaStore from "../stores/Jam3yaStore";
import { observer } from "mobx-react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function UpdateJam3yaModal({ jam3ya }) {
  const [newjam3ya, setJam3ya] = useState({
    title: jam3ya.title,
    image: jam3ya.image,
    amount: jam3ya.amount,
    limit: jam3ya.limit,
    startDate: "",
    endDate: "",
  });
  console.log(jam3ya);
  const handleChange = (event) => {
    setJam3ya({ ...newjam3ya, [event.target.name]: event.target.value });
  };
  const handleUpdate = () => {
    jam3yaStore.updateJam3ya(jam3ya._id, newjam3ya);
    console.log(jam3ya._id);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update Jam3ya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <InputGroup>
              <InputGroup.Text>title</InputGroup.Text>
              <Form.Control
                type="text"
                name="title"
                value={newjam3ya.title}
                onChange={handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>image</InputGroup.Text>
              <Form.Control
                type="text"
                name="image"
                value={newjam3ya.image}
                onChange={handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>amount</InputGroup.Text>
              <Form.Control
                type="number"
                name="amount"
                onChange={handleChange}
                value={newjam3ya.amount}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text>limit</InputGroup.Text>
              <Form.Control
                type="number"
                name="limit"
                onChange={handleChange}
                value={newjam3ya.limit}
              />
            </InputGroup>
            <DatePicker
              selected={newjam3ya.startDate}
              onChange={(date) => setJam3ya({ ...newjam3ya, startDate: date })}
            />
            Start Date
            <InputGroup>
              <DatePicker
                selected={newjam3ya.endDate}
                onChange={(date) => setJam3ya({ ...newjam3ya, endDate: date })}
              />
              End Date
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    // <>
    //   {/* i change this class name to btn btn-primary */}
    //   <button
    //     type="button"
    //     class="update"
    //     data-toggle="modal"
    //     data-target="#exampleModal"
    //   >
    //     Update
    //   </button>

    //   {/* <!-- Modal --> */}
    //   <div
    //     class="modal fade"
    //     id="exampleModal"
    //     tabindex="-1"
    //     role="dialog"
    //     aria-labelledby="exampleModalLabel"
    //     aria-hidden="true"
    //   >
    //     <div class="modal-dialog" role="document">
    //       <div class="modal-content">
    //         <div class="modal-header">
    //           <h5 class="modal-title" id="exampleModalLabel">
    //             Modal title
    //           </h5>
    //           <button
    //             type="button"
    //             class="close"
    //             data-dismiss="modal"
    //             aria-label="Close"
    //           >
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //         </div>
    //         <div class="modal-body">
    //           <input
    //             name="title"
    //             placeholder="username"
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div class="modal-footer">
    //           <button
    //             type="button"
    //             class="btn btn-secondary"
    //             data-dismiss="modal"
    //           >
    //             Close
    //           </button>
    //           <button
    //             type="button"
    //             class="btn btn-primary"
    //             onClick={handleUpdate}
    //           >
    //             Save changes
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default observer(UpdateJam3yaModal);
