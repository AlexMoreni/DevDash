const express = require("express");
const router = express.Router();

const UsersController = require("../controller/UsersControllers");

router.post("/register", UsersController.registerUsers);
router.post("/login", UsersController.loginUser);

module.exports = router;
