const express = require("express");
const router = express.Router();
const controller = require("../controllers/chatRoomController");

router.get("/", controller.getAllchatRoom);
router.get("/:id", controller.getByIdchatRoom);


module.exports = router;