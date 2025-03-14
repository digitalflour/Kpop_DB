import "./styles.css";
import bgImage from "./assets/seventeen-bg.jpg";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <h1>Welcome to Kpop-edia</h1>
        <p>Your ultimate K-pop fan hub!</p>
        <button>Explore Now</button>
        <div className="footer">Made with ❤️ for K-pop fans</div>
      </div>
    </div>
  );
}

export default App;
