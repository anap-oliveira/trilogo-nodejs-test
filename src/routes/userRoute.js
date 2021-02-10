const express = require("express")
const router = express.Router()
const controller = require("../controllers/userController")

router.get("/", controller.getAllUser)
router.get("/:id", controller.getById)

module.exports = router;