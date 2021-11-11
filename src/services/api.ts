import axios from 'axios';

const api = axios.create({
  baseURL: `https://superheroapi.com/api/${process.env.REACT_APP_SEUPER_HERO_ACESS_TOKEN}/`,
  headers: {
    'Content-Type': '*/*',
    'Access-Control-Allow-Origin': '*'
  }
})

export default api