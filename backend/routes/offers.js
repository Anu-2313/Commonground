const express = require('express');
const {
  createOffer,
  listOffers,
  getOffer,
  updateOffer
} = require('../controllers/offerController');

const router = express.Router();

router.post('/', createOffer);
router.get('/', listOffers);
router.get('/:id', getOffer);
router.put('/:id', updateOffer);

module.exports = router;
