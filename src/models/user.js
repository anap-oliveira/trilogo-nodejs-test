const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true }
}, {
    versionKey: false
    
});

const user = mongoose.model('user', userSchema)

module.exports = user;