import React from "react";
import Jam3yaItem from "./Jam3yaItem";
import jam3yaStore from "../stores/Jam3yaStore";
import { observer } from "mobx-react";
import { Col, Row} from "react-bootstrap";
import { useState } from "react";
import SearchBar from "./SearchBar";

function Jam3yaList() {
  const [query, setQuery] = useState("");

  const jam3yaList = jam3yaStore.jam3yat
    .filter((jam3ya) =>
      jam3ya.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((jam3ya) => (
      <Col className="list">
        <Jam3yaItem classname="list" jam3ya={jam3ya} key={jam3ya.id} />
      </Col>
    ));

  return (
    <>
      <div>
        <SearchBar setQuery={setQuery} />
      </div>
      <Row md={3}>
        {jam3yaList}
      </Row>
    </>
  );
}
export default observer(Jam3yaList);
