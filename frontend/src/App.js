import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// KpopPage Component (K-pop Encyclopedia)
const KpopPage = () => {
  const [artists, setArtists] = useState([]);
  const [artistName, setArtistName] = useState("");
  const [artistDescription, setArtistDescription] = useState("");
  const [artistGenre, setArtistGenre] = useState("");

  // Handle adding new artist to the list
  const handleAddArtist = () => {
    if (artistName && artistDescription && artistGenre) {
      const newArtist = { name: artistName, description: artistDescription, genre: artistGenre };
      setArtists([...artists, newArtist]);
      setArtistName("");
      setArtistDescription("");
      setArtistGenre("");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div
  style={{
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "white",
    position: "relative",
    background: "url('/seventeen-bg.jpg') center center/cover no-repeat",
  }}
>
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
          zIndex: -1,
        }}
      ></div>

      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
          marginBottom: "20px",
        }}
      >
        K-pop-Edia
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.6",
          opacity: 0.9,
          padding: "20px", // Added padding to the paragraph
          maxWidth: "80%",
          marginBottom: "30px", // Spacing below the paragraph
        }}
      >
        Discover and add your favorite K-pop bands/artists to the encyclopedia.
      </p>

      {/* Form to Add Artist */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.3)",
          padding: "20px",
          borderRadius: "12px",
          backdropFilter: "blur(8px)",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
        }}
      >
        <input
          type="text"
          placeholder="Artist/Band Name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "1.1rem",
            marginBottom: "10px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            
          }}
        />
        <input
          type="text"
          placeholder="Artist/Band Genre"
          value={artistGenre}
          onChange={(e) => setArtistGenre(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "1.1rem",
            marginBottom: "10px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          placeholder="Description"
          value={artistDescription}
          onChange={(e) => setArtistDescription(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "1.1rem",
            marginBottom: "20px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            height: "100px",
            resize: "none",
          }}
        />
        <button
          onClick={handleAddArtist}
          style={{
            padding: "12px 30px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg,rgb(85, 169, 205),rgb(89, 183, 202))",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.2s, background 0.3s",
            boxShadow: "0 4px 8px rgb(0, 0, 0)",
          }}
        >
          Add Artist
        </button>
      </div>

      {/* Display Added Artists */}
      <div style={{ marginTop: "40px", width: "100%", maxWidth: "600px" }}>
        <h2>Added Artists/Bands</h2>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: "0",
            fontSize: "1rem",
            marginTop: "20px",
          }}
        >
          {artists.map((artist, index) => (
            <li
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "10px",
                textAlign: "left",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3>{artist.name}</h3>
              <p><strong>Genre:</strong> {artist.genre}</p>
              <p><strong>Description:</strong> {artist.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// HomePage Component (Main Page)
const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        background: "url('/seventeen-bg.jpg') center center/cover no-repeat", // Same background
        position: "relative",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
          marginBottom: "20px",
        }}
      >
        Welcome to Kpop-edia
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.6",
          opacity: 0.9,
          padding: "10px 20px",
          maxWidth: "80%",
          marginBottom: "30px",
        }}
      >
        Dive into the ultimate K-pop experience. Discover your favorite idols, music, and more!
      </p>

      <Link to="/kpop-page">
        <button
          style={{
            padding: "12px 30px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg,rgb(85, 169, 205),rgb(89, 183, 202))",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.2s, background 0.3s",
            boxShadow: "0 4px 8px rgb(0, 0, 0)",
          }}
        >
          Enter K-pop Encyclopedia
        </button>
      </Link>
    </div>
  );
};

// Main App Component (Router Setup)
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kpop-page" element={<KpopPage />} />
      </Routes>
    </Router>
  );
};

export default App;
