const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Create or Authenticate a User
router.post("/users", async (req, res) => {
  try {
    const { email } = req.body;

    // Validate request body
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (user) {
      // User exists, authenticate and return user details or token
      return res.status(200).json({ message: "User authenticated", user });
    }

    // User doesn't exist, create a new user
    const newUser = new User({ email });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get user by email
router.get("/users/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/users/:email/chats/:chatno/messages", async (req, res) => {
  try {
    const { email, chatno } = req.params;
    const { message, response } = req.body;

    // Validate request body
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Find the user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the chat
    let chat = user.chats.find((chat) => chat.chatno === Number(chatno));

    // If the chat doesn't exist, create a new one
    if (!chat) {
      chat = { chatno: Number(chatno), messages: [] };
      user.chats.push(chat);
    }

    // Add the message to the chat
    chat.messages.push({ message, response }); // Include response when adding the message

    // Save the user
    await user.save();

    res.status(201).json({ message: "Message added successfully", chat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get messages of a specific chat
router.get("/users/:email/chats/:chatno/messages", async (req, res) => {
  try {
    const { email, chatno } = req.params;

    // Find the user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the chat
    let chat = user.chats.find((chat) => chat.chatno === Number(chatno));
    if (!chat) {
      return res.status(404).json({ error: "Chat not found" });
    }

    // Return the messages of the chat
    res.status(200).json(chat.messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
