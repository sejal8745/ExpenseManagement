const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

const router = express.Router();

//routers
//Post || login
router.post("/login", loginController);

//register routes
//PORT || register

router.post("/register", registerController);

module.exports = router;
