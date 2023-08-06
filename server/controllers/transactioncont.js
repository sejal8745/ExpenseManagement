const transacModel = require("../models/Transactionmodel");
const moment = require("moment");

const getAllTransaction = async (req, res) => {
  try {
    const { frequency } = req.body;
    const transaction = await transacModel.find({
      date: {
        $gt: moment().subtract(Number(frequency), "d").toDate(),
      },
      userid: req.body.userid,
    });
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transacModel(req.body);

    await newTransaction.save();

    res.status(201).send("Transaction Created");
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = { getAllTransaction, addTransaction };
