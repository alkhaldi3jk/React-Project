import "./App.css";
import SignupModal from "./Components/SignupModal";
import Jam3yaList from "./Components/Jam3yaList";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <SignupModal />

      {/* <h2>{authStore.user ? authStore.user.email : "no user"}</h2> */}
      <Jam3yaList />
    </div>
  );
}

export default App;
