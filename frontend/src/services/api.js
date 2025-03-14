import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/';

export const getArtists = async () => {
    const response = await axios.get(`${API_BASE_URL}artists/`);
    return response.data;
};
