// src/pages/Albums.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axios';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get('/albums');
        setAlbums(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title} by {album.artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
