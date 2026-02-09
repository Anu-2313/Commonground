const listUsers = (req, res) => {
  res.json({ message: 'List users stub' });
};

const getUser = (req, res) => {
  res.json({ message: 'Get user stub', userId: req.params.id });
};

const updateUser = (req, res) => {
  res.json({ message: 'Update user stub', userId: req.params.id });
};

module.exports = {
  listUsers,
  getUser,
  updateUser
};
