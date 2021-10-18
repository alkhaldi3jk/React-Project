import "./App.css";
import authStore from "./stores/authStore";
import SignupModal from "./components/SignupModal";
// import Jam3yadetail from "./components/Jam3yadetail";

function App() {
  return (
    <div>
      <h1>Jam3ia</h1>

      <h2>{authStore.user ? authStore.user.email : "no user"}</h2>

      <SignupModal />
      {/* <Jam3yadetail detail={detail} /> */}
    </div>
  );
}

export default App;
