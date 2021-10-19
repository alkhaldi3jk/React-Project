import React, { useState } from "react";
import jam3yaStore from "../stores/Jam3yaStore";
import { observer } from "mobx-react";

function UpdateJam3yaModal({ jam3ya }) {
  const [newjam3ya, setJam3ya] = useState({
    title: "",
    image: "props.jam3ya.password",
  });
  const handleChange = (event) => {
    setJam3ya({ ...newjam3ya, [event.target.name]: event.target.value });
  };
  const handleUpdate = () => {
    jam3yaStore.updateJam3ya(jam3ya._id);
    console.log(jam3ya._id);
  };
  return (
    <>
      {/* i change this class name to btn btn-primary */}
      <button
        type="button"
        class="update"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Update
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input
                name="title"
                placeholder="username"
                onChange={handleChange}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleUpdate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(UpdateJam3yaModal);
