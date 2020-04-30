import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reactnd-books-api.udacity.com/',
  headers: { Authorization: 'whatever-you-want' },
});

export default api;
