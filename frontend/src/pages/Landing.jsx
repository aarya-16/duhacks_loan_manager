import React from "react";
import styles from "../style";
import { Hero, Resources } from "../components";
const Landing = () => {
  return (
    <>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Resources />
        </div>
      </div>
    </>
  );
};

export default Landing;
