const API_KEY = import.meta.env.VITE_API_KEY;
export const getApiUrl = path => `http://localhost:3000/api${path}?api_key=${API_KEY}`;
// export const getApiUrl = path => `https://lap-backend-rflw.vercel.app${path}?api_key=${API_KEY}`;
// export const getApiUrl = path => `https://request-client-backend.vercel.app/api${path}?api_key=${API_KEY}`;
