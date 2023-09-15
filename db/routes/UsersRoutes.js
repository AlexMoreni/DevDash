const express = require("express");
const router = express.Router();

const UsersController = require("../controller/UsersControllers");

router.post("/register", UsersController.registerUsers);
router.post("/login", UsersController.loginUser);
router.post("/edit", UsersController.editUser);
router.post("/newnote", UsersController.newNote);
router.get("/notes/:id", UsersController.showNotes);
router.post("/deletenote", UsersController.deleteNote);
router.post("/newproject", UsersController.newProject);
router.get("/projects/:id", UsersController.showProjects);
router.post("/deleteproject", UsersController.deleteProject);

module.exports = router;
