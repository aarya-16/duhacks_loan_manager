import React from "react";
import Button from "./Button";

const Card = () => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <p className="font-poppins font-bold text-black my-10">
        Mental Health in the Workplace
      </p>
      <p className="font-poppins font-normal text-black my-10">
        We've collected the best, tips, stats, and inspiring quotes on how to
        grow professionally while managing your mental health.
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
