const express = require('express');
const {
  createProject,
  listProjects,
  getProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

const router = express.Router();

router.post('/', createProject);
router.get('/', listProjects);
router.get('/:id', getProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
