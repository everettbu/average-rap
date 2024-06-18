import React, { useState } from 'react';
import axios from '../axios';

function Albums() {
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/albums/search?query=${query}`);
      setAlbums(response.data);
    } catch (error) {
      console.error('Error searching albums', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for albums"
          className="border p-2 rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
      </form>
      <ul className="space-y-4">
        {albums.map(album => (
          <li key={album.id} className="flex items-center space-x-4">
            {album.images[0] && <img src={album.images[0].url} alt={album.name} className="w-16 h-16 rounded" />}
            <div>
              <p className="font-bold">{album.name}</p>
              <p className="text-gray-500">{album.artists[0].name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
