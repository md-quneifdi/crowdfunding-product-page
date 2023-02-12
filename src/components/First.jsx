import React, { useState, createElement } from "react";
import {
  logoMastercraft,
  bookmark,
  closeModal as closeIt,
} from "../assets/images";
import { HiBookmark } from "react-icons/hi";
import Modal from "react-modal";
import content from "./content";
import ModalFile from "./ModalFile";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "220px",
    height: "98%",
    borderRadius: "20px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
const First = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="w-full md:w-[70%] bg-white rounded-md p-5 relative mx-auto">
      <div className="logo w-[65px] h-[65px] absolute -top-8 left-[49%]">
        <img src={logoMastercraft} alt="" className="w-full h-ful" />
      </div>
      <div className="title-part flex-1 text-center mt-16 mb-5 flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="font-normal text-lg mt-4 md:max-w-[90%] max-w-md text-center">
          {" "}
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="btns-part flex-1 flex justify-between px-16 mt-5 mb-10">
        <button
          onClick={openModal}
          className="w-[180px] bg-modCyan hover:bg-darkCyan outline-none
               text-white px-4 py-4 rounded-full duration-500
               text-center text-lg font-medium whitespace-nowrap"
        >
          Back this project
        </button>
        <button
          className="w-[180px] bg-slate-200 outline-none hidden lg:block
               text-darkCyan hover:text-darkGray pl-6 py-4 rounded-full duration-500 relative
               text-center text-lg font-medium whitespace-nowrap group"
        >
          <span
            className="w-[65px] h-[65px] rounded-full bg-darkCyan group-hover:bg-zinc-700
                   text-white group-hover:text-darkGray text-center
                  p-[21px] text-[20px] absolute -left-4 -top-[2.5px]"
          >
            {createElement(HiBookmark)}
          </span>
          Bookmark
        </button>
        <span
          className="w-[65px] h-[65px] rounded-full bg-darkCyan hover:bg-zinc-700
                   text-white group-hover:text-darkGray text-center cursor-pointer 
                  p-[21px] text-[20px] lg:hidden"
        >
          {createElement(HiBookmark)}
        </span>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalFile closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default First;
