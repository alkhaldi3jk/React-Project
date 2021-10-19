import React from "react";
import Jam3yaItem from "./Jam3yaItem";
import jam3yaStore from "../stores/Jam3yaStore";
import { observer } from "mobx-react";
import { Col } from "react-bootstrap";

function Jam3yaList() {
  const jam3yaList = jam3yaStore.jam3yat.map((jam3ya) => (
    <Col className="list">
      <Jam3yaItem classname="list" jam3ya={jam3ya} key={jam3ya.id} />
    </Col>
  ));

  return <>{jam3yaList}</>;
}
export default observer(Jam3yaList);
