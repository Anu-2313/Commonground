const createProject = (req, res) => {
  res.status(201).json({ message: 'Create project stub' });
};

const listProjects = (req, res) => {
  res.json({ message: 'List projects stub' });
};

const getProject = (req, res) => {
  res.json({ message: 'Get project stub', projectId: req.params.id });
};

const updateProject = (req, res) => {
  res.json({ message: 'Update project stub', projectId: req.params.id });
};

const deleteProject = (req, res) => {
  res.status(204).send();
};

module.exports = {
  createProject,
  listProjects,
  getProject,
  updateProject,
  deleteProject
};
