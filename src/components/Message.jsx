import React from "react";
import { check } from "../assets/images";

const Message = ({ closeModal }) => {
  return (
    <div className="flex flex-col justify-center items-center p-10 max-w-[500px]">
      <img src={check} alt="..." className="w-24 md:w-32" />
      <h2 className="text-3xl md:text-4xl text-center font-bold text-black my-5">
        Thanks for your support!
      </h2>
      <p className="text-lg font-medium text-center text-darkGray">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        onClick={closeModal}
        className="w-[180px] bg-modCyan hover:bg-darkCyan outline-none
               text-white px-4 py-[14px] rounded-full duration-500
               text-center text-lg font-medium whitespace-nowrap mt-5"
      >
        Got it!
      </button>
    </div>
  );
};

export default Message;
