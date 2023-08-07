const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);
const transacModel = mongoose.model("transactions", TransactionSchema);
module.exports = transacModel;
