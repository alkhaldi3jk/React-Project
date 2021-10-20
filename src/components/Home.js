import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Sharing is Caring</h1>
        <h3>Create or Join a Jam3ya</h3>
      </div>
      <Link className="join" to="/jam3ya">
        Join
      </Link>
      <img
        className="homeimg"
        alt=""
        src="https://www.kindpng.com/picc/m/69-695714_solar-energy-save-money-hd-png-download.png"
      />
    </>
  );
};

export default Home;
