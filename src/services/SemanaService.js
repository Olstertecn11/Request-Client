
import axios from 'axios';
import { getApiUrl } from './../config/config';

const apiUrl = getApiUrl('/semana');

const SemanaService = {
  getAll: async () => {
    return axios.get(getApiUrl('/semanas'), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error fetching semanas:', err);
        throw err;
      });
  },
  getAllSemanas: async () => {
    return axios.get(getApiUrl('/semanas/todas'), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error fetching semanas:', err);
        throw err;
      });
  },

  getLast: async () => {
    return axios.get(`${getApiUrl('/semana/ultima')}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error fetching last semana:', err);
        throw err;
      });
  },

  create: async () => {
    const fh_creacion = new Date().toISOString().split('T')[0];
    const fh_inicio = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0];
    const fh_final = fh_creacion;
    return axios.post(apiUrl, { fh_creacion, fh_inicio, fh_final }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error creating semana:', err);
        throw err;
      });
  }

};

export default SemanaService;

