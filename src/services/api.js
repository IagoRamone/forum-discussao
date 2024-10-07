import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api.com',
});

export const getTopics = () => api.get('/topics');
export const getTopicDetails = (id) => api.get(`/topics/${id}`);
export const createTopic = (data) => api.post('/topics', data);
export const addComment = (topicId, data) => api.post(`/topics/${topicId}/comments`, data);
