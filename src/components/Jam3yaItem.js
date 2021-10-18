import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateJam3yaModal from "./UpdateJam3yaModal";
import jam3yaStore from "../stores/Jam3yaStore";

export default function ChatJam3yaitem(props) {
  const jam3ya = props.jam3ya;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleDelete = () => {
    jam3yaStore.deleteJam3ya(jam3ya.id);
  };
  return (
    <div className="group">
      <Link to={`/jam3ya/${jam3ya.slug}`}>
        <div style={{ animationDelay: "0.1" }} className="chatlist__item">
          <div className="avatar"></div>
          <div className="userMeta">
            <p>{jam3ya.password}</p>
            <p>{jam3ya.Email}</p>
            <span className="activeTime">{jam3ya.username}</span>
          </div>
        </div>
      </Link>

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
