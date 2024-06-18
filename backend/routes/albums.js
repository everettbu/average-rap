const express = require('express');
const router = express.Router();
const { searchAlbums } = require('../spotifyService');

router.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const albums = await searchAlbums(query);
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: 'Error searching albums' });
  }
});

module.exports = router;
