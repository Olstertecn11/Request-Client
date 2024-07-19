import axios from 'axios';
import { getApiUrl } from './../config/config';
const apiUrl = getApiUrl('/cliente/peticiones');

const PetitionService = {
  save: async ({ name, email, phone, content }) => {
    return axios.post(apiUrl, { nombre: name, correo: email, telefono: phone, contenido: content, estado: 1 }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    }).then(res => res.data).catch(err => console.log(err));
  },
  all: async () => {
    return axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>" // Aquí deberías incluir tu token de autorización si lo tienes
      }
    }).then(res => res.data).catch(err => console.log(err));
  }
}

export default PetitionService;

