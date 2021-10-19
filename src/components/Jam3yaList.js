import React, { useState } from "react";
import Jam3yaItem from "./Jam3yaItem";
import CreateJam3ya from "./CreateJam3ya";
import jam3yaStore from "../stores/Jam3yaStore";
import { observer } from "mobx-react";

function Jam3yaList(props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const jam3yaList = jam3yaStore.jam3yat.map((jam3ya) => {
    return <Jam3yaItem jam3ya={jam3ya} key={jam3ya.id} />;
  });
  return (
    <div className="main__chatlist">
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New jam3ya</span>
        <CreateJam3ya isOpen={isOpen} closeModal={closeModal} />
      </button>
      <center>
        <div className="chatlist__heading">
          <h2>jam3yat</h2>
        </div>
      </center>

      <div className="chatlist__items">{jam3yaList}</div>
    </div>
  );
}
export default observer(Jam3yaList);
