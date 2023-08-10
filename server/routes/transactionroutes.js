const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactioncont");

const router = express.Router();

//routes
//add transaction
router.post("/add-transaction", addTransaction);
//edit transaction
router.post("/edit-transaction", editTransaction);
//delete transaction
router.post("/delete-transaction", deleteTransaction);

router.post("/get-transaction", getAllTransaction);

module.exports = router;
