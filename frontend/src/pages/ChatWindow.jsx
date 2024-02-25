import React, { useState, useEffect } from "react";
import { Message } from "../components";

const ChatWindow = ({ chat }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setMessages(chat);
  }, [chat]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
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
