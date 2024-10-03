
import axios from 'axios';
import { getApiUrl } from './../config/config';

const apiUrl = getApiUrl('/noticia');

const NewsService = {
  getAll: async () => {
    return axios.get(getApiUrl('/noticias'), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error fetching noticias:', err);
        throw err;
      });
  },

  // Obtener la última noticia
  getLast: async () => {
    return axios.get(`${getApiUrl('/noticia/ultima')}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error fetching last noticia:', err);
        throw err;
      });
  },

  // Crear una nueva noticia
  create: async (title, content, conclution, image) => {
    return axios.post(apiUrl, { title, content, conclution, image }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error creating noticia:', err);
        throw err;
      });
  },

  // Actualizar una noticia existente
  update: async (id, title, content, conclution, image) => {
    return axios.post(getApiUrl('/noticia/update'), { id, title, content, conclution, image }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error updating noticia:', err);
        throw err;
      });
  },

  // Eliminar una noticia por su ID
  delete: async (id) => {
    return axios.delete(`${apiUrl}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error deleting noticia:', err);
        throw err;
      });
  },

  // Obtener noticias con filtro
  getFiltered: async (filtro) => {
    return axios.get(`${getApiUrl('/noticias/filtro')}?filtro=${filtro}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>"
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.error('Error fetching filtered noticias:', err);
        throw err;
      });
  }
};

export default NewsService;
