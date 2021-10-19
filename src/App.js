import "./App.css";
import NavBar from "./components/NavBar";
import Jam3yaList from "./components/Jam3yaList";
import SignupModal from "./components/SignupModal";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="body">
      <NavBar />
      <SignupModal />
      <Container>
        <Row md={3}>
          {/* <h2>{authStore.user ? authStore.user.email : "no user"}</h2> */}
          <Jam3yaList />
        </Row>
      </Container>
    </div>
  );
}

export default App;
