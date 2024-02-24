import React from "react";
import "./bg-animate.css";
import styles from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chat, Landing, Login, Resources } from "./pages";
import { Button, Footer, Hero, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="absolute">
        <div className="absolute inset-0 justify-center">
          <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
          <div className="bg-shape2 bg-blue opacity-50 bg-blur"></div>
          <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
