const user = require("../models/chatRoom.js");

const getAllchatRoom = (req, res) => {
    user.find(function (err, user) {
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(200).send(user)
        };
    });
};

const getByIdchatRoom = (req, res) => {
    
    const inputId = req.params.id
    user.findOne( {id:inputId}, function (err, user) {
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(200).send(user)
        };
    });
};


module.exports = {
    getAllchatRoom,
    getByIdchatRoom,
};