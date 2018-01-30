import axios from 'axios';

const API_URL = process.env.API_URL;
const api = {
  getToken(code = '') {
    return axios.get(`${API_URL}/login/github/token?code=${code}`);
  },
};

export default api;
