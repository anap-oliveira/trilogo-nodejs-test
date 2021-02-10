const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatRoomId: { type: Number, required: true },
    userId: { type: Number, required: true },
    message: { type: String, required: true }
    }, {
    versionKey: false
});

const message = mongoose.model('message', messageSchema)

module.exports = message;