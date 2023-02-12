import React, { useState } from "react";
import { logo, burger, close } from "../assets/images/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-desktop bg-cover bg-no-repeat bg-top w-full h-[280px]">
      <div className="md:container mx-auto px-5 py-3 md:px-8 lg:px-16">
        <div className="flex mt-8">
          <div className="logo">
            <img src={logo} alt="" className="md:w-32" />
          </div>
          <ul className="flex-1 md:flex justify-end items-center hidden text-white">
            <li className="mr-8 cursor-pointer hover:text-slate-200 font-normal">
              About
            </li>
            <li className="mr-8 cursor-pointer hover:text-slate-200 font-normal">
              {" "}
              Discover
            </li>
            <li className="cursor-pointer hover:text-slate-200 font-normal">
              {" "}
              Get Started
            </li>
          </ul>
          <div className="mob-menu md:hidden flex-1 flex flex-col justify-end items-end relative">
            <div
              onClick={() => setToggle((prev) => !prev)}
              className="icon mb-1 w-[18px] h-[18px]"
            >
              <img
                src={toggle ? close : burger}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <ul
              className={`absolute top-16 -left-12 flex flex-col w-[75%] min-w-[250px] rounded-xl bg-white duration-500 ${
                toggle ? "flex" : "hidden"
              }`}
            >
              <li
                className="p-5 text-slate-400 text-center w-full cursor-pointer hover:text-slate-200 
              font-normal border-b-2 border-slate-200 duration-500"
              >
                About
              </li>
              <li
                className="p-5 text-slate-400 text-center w-full cursor-pointer hover:text-slate-200
               font-normal border-b-2 border-slate-200 duration-500"
              >
                {" "}
                Discover
              </li>
              <li
                className="p-5 text-slate-400 text-center w-full cursor-pointer hover:text-slate-200 
              font-normal duration-500"
              >
                {" "}
                Get Started
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
