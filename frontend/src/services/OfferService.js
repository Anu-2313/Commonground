import ApiService from './ApiService.js';

const fetchOffers = () => ApiService.get('/offers');
const fetchOffer = (id) => ApiService.get(`/offers/${id}`);
const createOffer = (payload) => ApiService.post('/offers', payload);
const updateOffer = (id, payload) => ApiService.put(`/offers/${id}`, payload);

export default {
  fetchOffers,
  fetchOffer,
  createOffer,
  updateOffer
};
