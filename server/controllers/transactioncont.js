const transacModel = require("../models/Transactionmodel");
const moment = require("moment");

const getAllTransaction = async (req, res) => {
  try {
    const { frequency, selectDate, type } = req.body;
    const transaction = await transacModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectDate[0],
              $lte: selectDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
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

const editTransaction = async (req, res) => {
  try {
    await transacModel.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.status(200).json("Edit Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteTransaction = async (req, res) => {
  try {
    await transacModel.findOneAndDelete({ _id: req.body.transactionId });
    res.status(200).json("Delete Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
};
