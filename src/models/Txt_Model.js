const mongoose = require("mongoose");
const random = require("../utils/helper");
const customer_Schema = new mongoose.Schema(
  {
    cust_Id: {
      type: Number,
      required: true,
      default: random,
    },

    order_Id: {
      type: String,
      unique: true,
    },

    total_amt: {
      type: Number,
    },

    mode: {
      type: String,
    },

    coin_1_amount: {
      type: Number,
    },

    coin_2_amount: {
      type: Number,
    },

    coin_1_txHash: {
      type: String,
    },

    coin_2_txHash: {
      type: String,
    },

    coin_1_rate: {
      type: Number,
    },

    coin_2_rate: {
      type: Number,
    },

    coin_1_status: {
      type: Boolean,
      default: false,
    },

    coin_2_status: {
      type: Boolean,
      default: false,
    },

    final_status: {
      type: Boolean,
      default: false,
    },

    txt_time: {
      type: Date,
    },

    coin_1_ApiRes: {
      type: Boolean,
      default: false,
    },

    coin_2_ApiRes: {
      type: Boolean,
      default: false,
    },

    final_ApiRes: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("transaction", customer_Schema);
