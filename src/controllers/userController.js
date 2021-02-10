const user = require("../models/user.js")

const getAllUser = (req, res) => {
    user.find(function (err, user) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(user)
        }
    })
}

const getById = (req, res) => {
    
    const inputId = req.params.id
    user.findOne( {id:inputId}, function (err, user) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(user)
        }
    })
}
module.exports = {
    getAllUser,
    getById,
}