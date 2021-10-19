import React from "react";
import { observer } from "mobx-react";

function Jam3yadetail() {
  return (
    <div >
      <img src={jam3ya.image} alt="..."/>
      <p>{jam3ya.title}</p>
    </div>
  );
}
//   The duration of the jam3ya in months, Users that joined this jam3ya, Start date, End date,
// The user who created the jam3ya
export default observer(Jam3yadetail);
