import React from "react";
import styles from "../style";
import { Hero } from "../components";
const Landing = () => {
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  );
};

export default Landing;
