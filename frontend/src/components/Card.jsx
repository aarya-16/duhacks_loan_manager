import React from "react";
import Button from "./Button";

const Card = () => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <p className="font-poppins font-bold text-black my-10">
        tool that helps you to translate
      </p>
      <p className="font-poppins font-normal text-black my-10">
        This is a simple translation tool with AI enhanced features
      </p>
      <div className="flex flex-row">
        <div className="flex flex-col ml-4">
          <Button text="Learn More" styles="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Card;
