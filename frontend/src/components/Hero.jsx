import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "../style";
import image from "../assets/consultation.svg";
import Button from "./Button.jsx";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Done by BelonggAI."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Translation  <br className="sm:block hidden" />{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          <span ref={el}></span>
        </h1>
        <Button text="Chat Now!" styles="mt-10 ml-10" />
      </div>
      <div>
        <img
          src={image}
          alt="Online Mental Health Consulation"
          className="w-[600px] h-[500px] relative z-[5]"
        />
      </div>
    </div>
  );
};

export default Hero;
