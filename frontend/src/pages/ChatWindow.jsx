import React, { useState, useEffect } from "react";
import axios from "axios";
import { Message } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Aarya4536/tinyllama-therapy-bot-v1",
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

const ChatWindow = ({ selectedChat, count }) => {
  const { user } = useAuth0();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (Array.isArray(selectedChat)) {
      setMessages(selectedChat);
    } else {
      setMessages([]);
    }
  }, [selectedChat]);

  const sendMessageToServer = async () => {
    try {
      const response = await query({
        inputs: inputValue,
      });

      const generatedResponse = response.generatedText;

      const apiResponse = await axios.post(
        `http://localhost:3000/api/users/${user.email}/chats/${count}/messages`,
        {
          message: inputValue,
          response: generatedResponse,
        }
      );

      const updatedChat = apiResponse.data.chat;
      setMessages(updatedChat.messages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      sendMessageToServer();
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="chat-content flex-grow p-4 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl mb-2 overflow-auto">
        {/* Your chat messages/content go here */}
        {messages &&
          messages.map((message, index) => (
            <Message
              key={index}
              text={message.message}
              response={message.response}
            />
          ))}
      </div>
      <div className="input-field bg-white backdrop-filter backdrop-blur-md py-2 px-4 rounded-xl border border-gray-200 flex items-center">
        <input
          className="w-full h-full bg-transparent outline-none"
          type="text"
          name="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="ml-2" onClick={handleButtonClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white dark:text-black"
          >
            <path
              d="M7 11L12 6L17 11M12 18V7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
