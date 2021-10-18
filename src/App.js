import "./App.css";
import authStore from "./stores/authStore";
import SignupModal from './Components/SignupModal'

function App() {
  return (
    <div>
      <h1>Jam3ia</h1>
      
      <h2>{authStore.user? authStore.user.email: "no user"}</h2>

    <SignupModal/>
    </div>
  );
}

export default App;
