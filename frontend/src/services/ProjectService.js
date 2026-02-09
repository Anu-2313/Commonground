import ApiService from './ApiService.js';

const fetchProjects = () => ApiService.get('/projects');
const fetchProject = (id) => ApiService.get(`/projects/${id}`);
const createProject = (payload) => ApiService.post('/projects', payload);
const updateProject = (id, payload) => ApiService.put(`/projects/${id}`, payload);

export default {
  fetchProjects,
  fetchProject,
  createProject,
  updateProject
};
