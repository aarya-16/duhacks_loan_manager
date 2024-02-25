import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import ChatWindow from "./ChatWindow";

const ChatSidebar = () => {
  const { user } = useAuth0();
  const [chatCount, setChatCount] = useState(0);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = async (chatno) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/${user.email}/chats/${chatno}/messages`
      );
      setSelectedChat(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUserChats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/users/${user.email}`
        );
        setChatCount(response.data.chats.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserChats();
  }, [user.email]);

  const handleNewChat = async () => {
    try {
      // POST request to backend to create a new chat
      const response = await axios.post(
        `http://localhost:3000/api/users/${user.email}/chats/${
          chatCount + 1
        }/messages`,
        {
          message: "Initial message for new chat",
        }
      );

      // If the request is successful, increment chatCount
      if (response.status === 201) {
        setChatCount(chatCount + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col relative h-full">
      {/* Div for New Chat button */}
      <button
        className="chat-button p-2 font-poppins bg-white text-black bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl mb-2"
        onClick={handleNewChat}
      >
        New Chat
      </button>

      {/* Div for previous messages - occupies most of the space */}
      <div className="previous-messages flex-grow p-4 font-poppins bg-white text-black bg-opacity-5 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl mb-2">
        {[...Array(chatCount)].map((_, i) => (
          <button
            key={i}
            className="chat-button p-2 font-poppins bg-white text-black bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl mb-2 w-full"
            onClick={() => handleChatClick(i + 1)}
          >
            Chat {i + 1}
          </button>
        ))}
      </div>

      {/* Pass the selected chat to the ChatWindow component */}
      {selectedChat && <ChatWindow chat={selectedChat} />}
    </div>
  );
};

export default ChatSidebar;
