const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")
const ProductcController= require("../controllers/productController")
const orderController= require("../controllers/orderController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createUser", commonMW.myOtherMiddleware, UserController.createUser);
router.post("/createOrder", commonMW.myOtherMiddleware, orderController.createOrder);
router.post("/createproduct", commonMW.myOtherMiddleware, ProductcController.createproduct);


module.exports = router;