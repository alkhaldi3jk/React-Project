import { Button } from "react-bootstrap";
import React, { useState } from "react";
import UpdateJam3yaModal from "./UpdateJam3yaModal";
import jam3yaStore from "../stores/Jam3yaStore";
import { Container, Row } from "react-bootstrap";

export default function ChatJam3yaitem(props) {
  const jam3ya = props.jam3ya;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleDelete = () => {
    jam3yaStore.deleteJam3ya(jam3ya.id);
  };
  return (
    <div className="item">
      <Container>
        <Row md={3}>
          <p>{jam3ya.title}</p>
          <img src={jam3ya.image} alt={jam3ya.title} />
        </Row>
      </Container>

      <Button className="delete" onClick={handleDelete}>
        Delete
      </Button>
      <Button className="delete" onClick={openModal}>
        Update
      </Button>
      <UpdateJam3yaModal
        isOpen={isOpen}
        closeModal={closeModal}
        jam3ya={jam3ya}
        updateJam3ya={props.updateJam3ya}
      />
    </div>
  );
}
