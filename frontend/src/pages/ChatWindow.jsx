// ChatWindow.js
import React from "react";

const ChatWindow = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="chat-content flex-grow p-4 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl mb-2">
        {/* Your chat messages/content go here */}
      </div>
      <button className="input-field bg-white backdrop-filter backdrop-blur-md py-2 px-4 rounded-xl border border-gray-200 flex items-center">
        <input
          className="w-full h-full bg-transparent outline-none"
          type="text"
          name="text"
          placeholder="Type your message..."
        />
        <div className="ml-2">
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
        </div>
      </button>
    </div>
  );
};

export default ChatWindow;
