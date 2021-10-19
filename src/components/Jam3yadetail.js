import React from "react";
import { observer } from "mobx-react";
// import jam3yaStore from "../stores/Jam3yaStore";
// import authStore from "../stores/authStore";


function Jam3yadetail({ jam3ya}) {


  console.log(jam3ya)
//  const handleUpdate=()=>{
//    authStore.updateJam3ya(jam3ya)
//  }
  // const handleSubmit=()=>
  // jam3yaStore.joinJam3ya(user.id)
  return (
    <div>
      <h3>{jam3ya.title}</h3>
      <img src={jam3ya.image} alt={jam3ya.title} />
      <p>Limit <br/>{jam3ya.limit}</p>
      <p>Start Date <br/>{jam3ya.startDate}</p>
      <p>End Date <br/>{jam3ya.endDate}</p>
      {/* <button onClick={handleSubmit}>Join</button> */}
      {/* <button onClick={handleUpdate}></button> */}

    </div>
  );
}
//   The duration of the jam3ya in months, Users that joined this jam3ya, Start date, End date,
// The user who created the jam3ya
export default observer(Jam3yadetail);
