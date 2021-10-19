import { Button } from "react-bootstrap";
import React, { useState } from "react";
import UpdateJam3yaModal from "./UpdateJam3yaModal";
import jam3yaStore from "../stores/Jam3yaStore";
import Jam3yadetail from "./Jam3yadetail";
import { observer } from "mobx-react";

function Jam3yaitem(props) {
  const jam3ya = props.jam3ya;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleDelete = () => {
    jam3yaStore.deleteJam3ya(jam3ya._id);
  };

  return (
    <div className="item">
      <Jam3yadetail jam3ya={jam3ya} />
      {/* <p>{jam3ya.title}</p>
      <img src={jam3ya.image} alt={jam3ya.title} />
      <p>{jam3ya.limit}</p> */}

      {/* i add this type,clas...... */}
      <Button
        type="button"
        class="delete"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={handleDelete}
      >
        Delete
      </Button>
      <UpdateJam3yaModal
        isOpen={isOpen}
        closeModal={closeModal}
        jam3ya={jam3ya}
      />
    </div>
  );
}

export default observer(Jam3yaitem);
