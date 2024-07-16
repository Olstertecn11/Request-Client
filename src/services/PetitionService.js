import axios from 'axios';
import { getApiUrl } from './../config/config';
const apiUrl = getApiUrl('/petitions');

const PetitionService = {
  save: async ({ name, email, content }) => {
    return axios.post(apiUrl, { name, email, content }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    }).then(res => res.data).catch(err => console.log(err));
  }
}

export default PetitionService;

