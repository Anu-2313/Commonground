const createOffer = (req, res) => {
  res.status(201).json({ message: 'Create offer stub' });
};

const listOffers = (req, res) => {
  res.json({ message: 'List offers stub' });
};

const getOffer = (req, res) => {
  res.json({ message: 'Get offer stub', offerId: req.params.id });
};

const updateOffer = (req, res) => {
  res.json({ message: 'Update offer stub', offerId: req.params.id });
};

module.exports = {
  createOffer,
  listOffers,
  getOffer,
  updateOffer
};
