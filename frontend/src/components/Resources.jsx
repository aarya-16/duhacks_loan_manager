import React from "react";
import styles from "../style";
import Card from "./Card";

const Resources = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
         The Best Resources <br className="sm:block hidden" />
          
        </h1>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        <Card />
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        <Card />
      </div>
    </section>
  );
};

export default Resources;
