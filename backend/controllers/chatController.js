const createMessage = (req, res) => {
  res.status(201).json({ message: 'Create chat message stub' });
};

const getConversation = (req, res) => {
  res.json({ message: 'Get conversation stub', conversationId: req.params.conversationId });
};

module.exports = {
  createMessage,
  getConversation
};
