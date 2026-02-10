const login = (req, res) => {
  res.json({ message: 'Login endpoint stub' });
};

const signup = (req, res) => {
  res.json({ message: 'Signup endpoint stub' });
};

const profile = (req, res) => {
  res.json({ message: 'Profile endpoint stub' });
};

module.exports = {
  login,
  signup,
  profile
};
