import React, { useEffect, useState } from "react";
import { getArtists } from "../services/api";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists().then(setArtists);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">🔥 K-Pop Artists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {artists.map((artist) => (
          <div key={artist.id} className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{artist.name}</h3>
            <p className="text-sm text-gray-600">Debut: {artist.debut_date}</p>
            {artist.company && <p className="text-sm text-gray-600">Company: {artist.company}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
