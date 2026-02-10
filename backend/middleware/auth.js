const authenticate = (req, res, next) => {
  req.user = null;
  next();
};

module.exports = { authenticate };
