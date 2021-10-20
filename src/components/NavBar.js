import { Button } from "react-bootstrap";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";
import { observer } from "mobx-react";

function NavBar() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/jam3ya">Jam3yat</Link>

        {authStore.user === null ? (
          <>
            <SigninModal /> <SignupModal />
          </>
        ) : (
          <Button variant="outline-success" onClick={authStore.logout}>
            logout
          </Button>
        )}
      </header>
    </div>
  );
}

export default observer(NavBar);
