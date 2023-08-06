const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactioncont");

const router = express.Router();

//routes
//add transaction
router.post("/add-transaction", addTransaction);

router.post("/get-transaction", getAllTransaction);

module.exports = router;
