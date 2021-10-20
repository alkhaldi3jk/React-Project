import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Sharing is Caring</h1>
      <h3>Create or Join a Jam3ya</h3>
      <Link to="/jam3ya">Join</Link>
      <img
        alt=""
        src="https://www.kindpng.com/picc/m/69-695714_solar-energy-save-money-hd-png-download.png"
      />
    </div>
  );
};

export default Home;
