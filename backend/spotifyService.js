const axios = require('axios');
const qs = require('qs');
const dotenv = require('dotenv');

dotenv.config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

let accessToken = '';

const getAccessToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = qs.stringify({ grant_type: 'client_credentials' });

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
  };

  try {
    const response = await axios.post(tokenUrl, data, { headers });
    accessToken = response.data.access_token;
  } catch (error) {
    console.error('Error getting access token', error);
  }
};

const searchAlbums = async (query) => {
  if (!accessToken) {
    await getAccessToken();
  }

  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album`;

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };

  try {
    const response = await axios.get(searchUrl, { headers });
    return response.data.albums.items;
  } catch (error) {
    console.error('Error searching albums', error);
  }
};

module.exports = {
  searchAlbums,
};
