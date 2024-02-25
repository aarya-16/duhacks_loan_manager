import React from "react";

const Message = ({ text, response }) => {
  return (
    <div className="w-full flex flex-col items-center h-fit">
      <div className="chat-content flex-grow pl-5 pr-5 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl w-full mb-2">
        <div className="py-7 flex justify-start w-full items-center space-x-6 text-black font-poppins">
          <div>You: {text}</div>
        </div>
      </div>
      <div className="chat-content flex-grow pl-5 pr-5 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md saturate-180 border border-gray-300 rounded-xl w-full mb-2">
        <div className="py-7 flex justify-start w-full items-center space-x-6 text-black font-poppins">
          <div>ChatGPT: {response}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
