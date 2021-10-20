const express = require("express");
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  dob: {
    type: String,
    trim: true,
    required: true,
  },
  country: {
    type: String,
    trim: true,
    required: true,
  },
  score: {
    type: String,
    trim: true,
    required: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});
//collection creation
const MensRanking = new mongoose.model("MenRanking", menSchema);

module.exports = MensRanking;
