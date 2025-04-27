import { Link } from "react-router-dom";
import "../styles.css";
import bgImage from "../assets/seventeen-bg.jpg"; // ✅ import image

const HomePage = () => (
  <div
    className="homepage-background"
    style={{
      backgroundImage: `url(${bgImage})`, // ✅ apply background image dynamically
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "white",
      position: "relative"
    }}
  >
    <div className="overlay" />
    <h1>Welcome to Kpop-edia</h1>
    <p className="home-intro">
  Dive into the ultimate K-pop experience. Discover your favorite idols, music, and more!
</p>


    <div className="button-center">
      <Link to="/kpop-page">
        <button className="explore-btn">Enter K-pop Encyclopedia</button>
      </Link>
    </div>
  </div>
);

export default HomePage;
