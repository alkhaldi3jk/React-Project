import "./App.css";
import NavBar from "./Components/NavBar";
import SignupModal from "./Components/SignupModal";
import { Container, Row } from "react-bootstrap";
import Jam3yaList from "./Components/Jam3yaList"
import CreateJam3ya from "./Components/CreateJam3ya";

// import Jam3yadetail from "./Components/Jam3yadetail";

function App() {
  return (
    <div className="body">
      <NavBar />
      <CreateJam3ya  />
    

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
