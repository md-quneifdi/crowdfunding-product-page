import React, { useState } from "react";
import content from "./content";
import Modal from "react-modal";
import Message from "./Message";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Third = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="w-full md:w-[70%] bg-white rounded-md flex flex-col relative mx-auto mt-6 p-8">
      <header className="flex-1">
        <h1 className="text-3xl font-bold text-black mt-5 mb-10">
          {content.title}
        </h1>
        <p className="text-lg font-medium text-darkGray">{content.p1}</p>
        <p className="text-lg font-medium text-darkGray my-5">{content.p2}</p>
      </header>
      <section className="flex flex-col gap-y-4">
        {content.card.map((card, i) => (
          <div
            key={i}
            className="border-4 border-slate-200 px-8 py-10 rounded-lg last:opacity-50"
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold text-black">{card.title}</h2>
              <p className="text-lg font-medium text-modCyan cursor-pointer">
                {card.price}
              </p>
            </div>
            <div>
              <p className="text-lg font-medium text-darkGray my-5">{card.p}</p>
            </div>
            <div className="left flex justify-between items-center">
              <h2 className="text-4xl font-bold text-black relative">
                {card.left}{" "}
                <span className="text-lg font-medium text-darkGray absolute top-2 ml-2">
                  left
                </span>{" "}
              </h2>
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
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Message closeModal={closeModal} />
        </Modal>
      </section>
    </div>
  );
};

export default Third;
