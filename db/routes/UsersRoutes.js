const express = require("express");
const router = express.Router();

const UsersController = require("../controller/UsersControllers");

router.post("/register", UsersController.registerUsers);
router.post("/login", UsersController.loginUser);
router.post("/edit", UsersController.editUser);

module.exports = router;
