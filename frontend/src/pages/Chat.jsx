import React, { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

const Chat = () => {
  const navbarHeight = 99;
  const { user } = useAuth0();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/users", {
          email: user.email,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

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
