import "./App.css";
import NavBar from "./Components/NavBar"
import Jam3yaList from "./Components/Jam3yaList"
import SignupModal from "./Components/SignupModal";
// import { Container, Row } from "react-bootstrap";
// import Jam3yadetail from "./Components/Jam3yadetail";

function App() {
  return (
    <div className="body">
      <NavBar />
      <SignupModal />
   

          {/* <h2>{authStore.user ? authStore.user.email : "no user"}</h2> */}
          <Jam3yaList />
    
    </div>
  );
}

export default App;
