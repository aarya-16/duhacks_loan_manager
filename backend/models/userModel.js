const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  response: { type: String },
  timestamp: { type: Date, default: Date.now },
});

const chatSchema = new mongoose.Schema({
  chatno: { type: Number, required: true },
  messages: [messageSchema],
});

const journalSchema = new mongoose.Schema({
  note: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  chats: [chatSchema],
  journal: [journalSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
