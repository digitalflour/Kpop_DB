import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const KpopPage = ({ artists, setArtists }) => {
  const [artistName, setArtistName] = useState("");
  const [artistDescription, setArtistDescription] = useState("");
  const [artistGenre, setArtistGenre] = useState("");

  const handleAddArtist = () => {
    if (artistName && artistDescription && artistGenre) {
      setArtists([...artists, { name: artistName, description: artistDescription, genre: artistGenre }]);
      setArtistName("");
      setArtistDescription("");
      setArtistGenre("");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="app">
      <div className="overlay" />
      <h1>K-pop-Edia</h1>
      <div className="form">
        <input placeholder="Artist/Band Name" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
        <input placeholder="Members" value={artistGenre} onChange={(e) => setArtistGenre(e.target.value)} />
        <textarea placeholder="Description" value={artistDescription} onChange={(e) => setArtistDescription(e.target.value)} />
        <button className="explore-btn" onClick={handleAddArtist}>Add Artist</button>
      </div>

      <Link to="/library">
        <button className="explore-btn" style={{ marginTop: "20px" }}>View Artist Library</button>
      </Link>
    </div>
  );
};

export default KpopPage;
