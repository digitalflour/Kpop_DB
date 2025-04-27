import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import KpopPage from "./components/KpopPage";
import ArtistLibrary from "./components/ArtistLibrary";
import "./styles.css";

const App = () => {
  const [artists, setArtists] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kpop-page" element={<KpopPage artists={artists} setArtists={setArtists} />} />
        <Route path="/library" element={<ArtistLibrary artists={artists} />} />
      </Routes>
    </Router>
  );
};

export default App;
