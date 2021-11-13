import axios from 'axios';

const api = axios.create({
  baseURL: `https://superheroapi.com/api.php/${process.env.REACT_APP_SEUPER_HERO_ACESS_TOKEN}/`,
})

export default api