import "./App.css";
import Home from "./components/Home";
import { Container, Row } from "react-bootstrap";
import CreateJam3ya from "./components/CreateJam3ya";
import NavBar from "./components/NavBar";
import Jam3yaList from "./components/Jam3yaList";
import { Route, Switch } from "react-router";
// import SearchBar from "./Components/SearchBar";
// import Jam3yadetail from "./Components/Jam3yadetail";
import { useState } from "react";
import jam3yaStore from "./stores/Jam3yaStore";
import { observer } from "mobx-react";

function App() {
  return (
    <div className="ba">
      <div className="nav-bar">
        <NavBar />
      </div>
      <Switch>
        <Route path="/jam3ya">
          <div className="create-jam3ya">
            <CreateJam3ya />
          </div>

          <Container>
            <Jam3yaList />
          </Container>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        {/* <h2>{authStore.user ? authStore.user.email : "no user"}</h2> */}
      </Switch>
    </div>
  );
}

export default observer(App);
