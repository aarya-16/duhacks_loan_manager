import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ChatSidebar = () => {
  const { user } = useAuth0();

  return (
    <div className="flex flex-col relative h-full">
      {/* Div for New Chat button */}
      <button className="chat-button p-2 font-poppins bg-white text-black bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl mb-2">
        New Chat
      </button>

      {/* Div for previous messages - occupies most of the space */}
      <div className="previous-messages flex-grow p-4 font-poppins bg-white text-black bg-opacity-5 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl mb-2">
        Previous Messages
      </div>

      {/* Div for profile with user email */}
      <div className="profile-tab p-2 font-poppins bg-white text-black bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl mb-2 text-center">
        Profile: {user.email}
      </div>
    </div>
  );
};

export default ChatSidebar;
