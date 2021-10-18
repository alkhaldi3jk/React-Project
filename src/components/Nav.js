import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import SignupModal from "./SignupModal";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

function Nav() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      <header class="header_area">
        <div id="header_navbar" class="header_navbar">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-12">
                <nav class="navbar navbar-expand-lg">
                  <NavLink class="navbar-brand" to="/">
                    <img
                      src="https://th.bing.com/th/id/OIP.b7ECh2U4uW6WhAhyVkt6awHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7"
                      alt="Logo"
                    />
                  </NavLink>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li class="nav-item">
                        <NavLink to="/courses">Courses</NavLink>
                      </li>

                      {authStore.user ? (
                        <>
                          <li class="nav-item">
                            Hello {authStore.user.username}
                          </li>
                          <li class="nav-item">
                            <Button onClick={() => authStore.logout()}>
                              Logout
                            </Button>{" "}
                          </li>
                        </>
                      ) : (
                        <>
                          <li class="nav-item">
                            <Button
                              onClick={() => {
                                setSignupIsOpen(true);
                                setSignIn(false);
                              }}
                            >
                              Sign up
                            </Button>
                          </li>
                          <li>
                            <Button
                              onClick={() => {
                                setSignupIsOpen(true);
                                setSignIn(true);
                              }}
                            >
                              Sign in
                            </Button>
                            <SignupModal
                              signIn={signIn}
                              closeModal={() => setSignupIsOpen(false)}
                              isOpen={signupIsOpen}
                            />
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default observer(Nav);
