import React, { useState } from "react";
import content from "./content";
import Modal from "react-modal";
import { closeModal as closeIt } from "../assets/images";
import Message from "./Message";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "40%",
    borderRadius: "20px",
  },
};

const ModalFile = ({ closeModal }) => {
  const [checked, setChecked] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closemodal() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        className="w-full bg-white rounded-md flex flex-col 
        relative mx-auto mt-6 p-5 py-8"
      >
        <header className="flex-1">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl font-bold text-black mt-5">
              {content.modal.title}
            </h1>
            <span onClick={closeModal}>
              <img src={closeIt} alt="" className="w-7" />
            </span>
          </div>
          <p className="text-lg font-medium text-darkGray my-5">
            {content.modal.p}
          </p>
        </header>
        {/* Cards */}
        <section className="flex flex-col gap-y-4">
          {content.modal.card.map((card, i) => (
            <div
              key={i}
              onClick={() => setChecked(i)}
              className={`border-4 border-slate-200 px-8 py-5 rounded-lg last:opacity-50 cursor-pointer
                ${i === checked ? "border-modCyan" : ""}`}
            >
              <div className="w-8 h-8 rounded-full ring-2 ring-slate-300 relative top-9 ">
                <span
                  className={`after:absolute after:content-[''] after:w-5 after:h-5 after:rounded-full
                     duration-300 after:bg-white
                    after:top-[5.5px] after:left-[5.5px] cursor-pointer ${
                      checked === i ? "after:!bg-modCyan" : ""
                    }`}
                ></span>
              </div>
              <div className="flex justify-between items-center mb-5 ml-16">
                <div className="flex justify-between items-center">
                  <h2
                    className="text-xl font-semibold text-black hover:text-modCyan 
                  cursor-pointer duration-500"
                  >
                    {card.title}
                  </h2>
                  <h2 className="text-xl font-semibold text-modCyan cursor-pointer ml-8">
                    {card.pledge}
                  </h2>
                </div>
                <div className="left flex justify-between items-center mr-10">
                  <h2 className="text-2xl font-bold text-black relative">
                    {card.left}{" "}
                    <span
                      className="text-lg font-medium text-darkGray absolute top-2 
                      ml-2 empty:hidden"
                    >
                      {card.leftText}
                    </span>{" "}
                  </h2>
                </div>
              </div>
              <div className="ml-16">
                <p className="text-lg font-medium text-darkGray my-3">
                  {card.p}
                </p>
              </div>
              <div
                className={`left flex justify-between items-center border-t-[2px]
                 border-slate-300 pt-3 mt-5 ${
                   i === checked ? "flex" : "hidden"
                 }`}
              >
                <h2 className="text-xl font-medium text-darkGray relative">
                  {card.enter}{" "}
                </h2>
                <div className="flex justify-between items-center">
                  <div
                    className="field flex justify-between items-center px-2 py-[10px] group
                     border-2 border-slate-200 rounded-full mr-3 w-36 hover:border-modCyan"
                  >
                    <span className="text-2xl font-bold text-zinc-400 ml-2">
                      $
                    </span>
                    <input
                      type="number"
                      className="flex-1 text-2xl text-center font-bold text-zinc-800 w-14 outline-none
                         border-r-2 border-slate-200 mr-3 group-hover:border-modCyan"
                      placeholder={card.price}
                    />
                  </div>
                  <button
                    onClick={openModal}
                    className="w-[180px] bg-modCyan hover:bg-darkCyan outline-none
                      text-white px-4 py-[14px] rounded-full duration-500
                      text-center text-lg font-medium whitespace-nowrap"
                  >
                    {card.btText}
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closemodal}
            style={customStyles}
          >
            <Message closeModal={closemodal} />
          </Modal>
        </section>
      </div>
    </>
  );
};

export default ModalFile;
