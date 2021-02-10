const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
    ticketId: { type: Number, required: true },
    description: { type: String, required: true },
    permalink: { type: String, required: true }
}, {
    versionKey: false
});

const chatRoom = mongoose.model('chatRoom', chatRoomSchema);

module.exports = chatRoom;