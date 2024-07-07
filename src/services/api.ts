import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getObats() {
    return apiClient.get('/obats');
  },
  getObat(id: number) {
    return apiClient.get(`/obats/${id}`);
  },
  addObat(obat: any) {
    return apiClient.post('/obats', obat);
  },
  updateObat(id: number, obat: any) {
    return apiClient.put(`/obats/${id}`, obat);
  },
  deleteObat(id: number) {
    return apiClient.delete(`/obats/${id}`);
  }
};
