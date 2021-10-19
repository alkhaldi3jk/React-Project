import "./App.css";
import { Container, Row } from "react-bootstrap";
import CreateJam3ya from "./components/CreateJam3ya";
import NavBar from "./components/NavBar";
import Jam3yaList from "./components/Jam3yaList";
// import Jam3yadetail from "./Components/Jam3yadetail";

function App() {
  return (
    <div className="body">
      <NavBar />
      <CreateJam3ya />

      {/* <h2>{authStore.user ? authStore.user.email : "no user"}</h2> */}
      <Container>
        <Row md={3}>
          <Jam3yaList />
        </Row>
      </Container>
    </div>
  );
}

export default App;
