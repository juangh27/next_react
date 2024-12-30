import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/posts/', // Replace with your API's base URL
});

export default api;