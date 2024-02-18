const Message = require('../models/Message');

module.exports.MessagesList = async (req, res) => {
    try {
      const messages = await Message.find();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}