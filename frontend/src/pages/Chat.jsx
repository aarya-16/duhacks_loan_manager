import React from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

const Chat = () => {
  const navbarHeight = 99;

  return (
    <div className="flex" style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
      <div className="left w-2/12 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl p-4 mx-auto mb-2 ml-2 mr-1">
        <ChatSidebar />
      </div>
      <div className="right w-10/12 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl p-4 mx-auto mb-2 mr-2 ml-1">
        <ChatWindow />
      </div>
    </div>
  );
};

export default Chat;
