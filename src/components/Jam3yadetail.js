import React from "react";

function Jam3yadetail(props) {
  return (
    <div className="detail">
      <img src={props.detail.image} />
      <p>{props.detail.name}</p>
      <p className="jam3ya-price">{props.detail.price} KD</p>
    </div>
  );
}
//   The duration of the jam3ya in months, Users that joined this jam3ya, Start date, End date,
// The user who created the jam3ya
export default Jam3yadetail;
