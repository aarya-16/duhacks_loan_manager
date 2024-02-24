import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = ({ text, styles }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [redirectToChat, setRedirectToChat] = useState(false);

  const handleClick = () => {
    if (text === "Login" && !isAuthenticated) {
      loginWithRedirect();
    } else if (text === "Logout" && isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else if (text === "Chat Now!" && !isAuthenticated) {
      loginWithRedirect();
    } else if (text === "Chat Now!" && isAuthenticated) {
      setRedirectToChat(true);
    }
  };

  if (redirectToChat) {
    navigate("/chat");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`button py-3 px-6 font-poppins font-medium text-[18px] rounded-[50px] background-color:black ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
