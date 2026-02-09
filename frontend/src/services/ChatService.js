import ApiService from './ApiService.js';

const fetchConversation = (conversationId) => ApiService.get(`/chat/${conversationId}`);
const sendMessage = (payload) => ApiService.post('/chat', payload);

export default {
  fetchConversation,
  sendMessage
};
