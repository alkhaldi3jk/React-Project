import "./App.css";
import NavBar from "./components/NavBar";
import Jam3yaList from "./components/Jam3yaList";
import SignupModal from "./components/SignupModal";
import { Container, Row } from "react-bootstrap";
// import Jam3yadetail from "./Components/Jam3yadetail";

function App() {
  return (
    <div className="body">
      <NavBar />
      <SignupModal />

      {/* <h2>{authStore.user ? authStore.user.email : "no user"}</h2> */}
      <Container>
        <Row md={4}>
          <Jam3yaList />
        </Row>
      </Container>
    </div>
  );
}

export default App;
