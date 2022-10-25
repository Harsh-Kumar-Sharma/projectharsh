const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//user Api
router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

//bookid in api
router.post("/createbook",UserController.createbook)
router.get("/getbookdata",UserController.getbookData)

module.exports = router;