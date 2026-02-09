const express = require('express');
const { createMessage, getConversation } = require('../controllers/chatController');

const router = express.Router();

router.post('/', createMessage);
router.get('/:conversationId', getConversation);

module.exports = router;
