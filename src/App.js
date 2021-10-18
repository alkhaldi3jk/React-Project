import "./App.css";
import Jam3yaList from "./components/Jam3yaList";
import { Route, Switch } from "react-router";
import Nav from "./components/Nav";
import SignupModal from "./components/SignupModal";

function App() {
  return (
    <div>
      <h1>Jam3ia</h1>

      {/* <center>
        <Jam3yaList />
      </center> */}
      <SignupModal />
    </div>
  );
}

export default App;
