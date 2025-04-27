import React from "react";
import { Link } from "react-router-dom";

const ArtistLibrary = ({ artists }) => {
  return (
    <div style={{ padding: "40px", textAlign: "center", color: "white" }}>
      <h1>Artist Library</h1>
      {artists.length === 0 ? (
        <p>No artists added yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {artists.map((artist, index) => (
            <li key={index} style={{
              background: "rgba(45, 5, 59, 0.1)",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              textAlign: "left",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              <h2>{artist.name}</h2>
              <p><strong>Members:</strong> {artist.genre}</p>
              <p><strong>Description:</strong> {artist.description}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Back button here */}
      <div style={{ marginTop: "30px" }}>
        <Link to="/kpop-page">
          <button
            style={{
              padding: "12px 30px",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #FF6FD8, #3813C2)",
              color: "white",
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            ⬅ Back to Add Artist
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtistLibrary;
