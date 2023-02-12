import React from "react";

const Second = () => {
  return (
    <div className="w-full md:w-[70%] bg-white rounded-md flex flex-col relative mx-auto mt-6 py-3">
      <div className="counts flex flex-col md:flex-row justify-center items-center p-8">
        <div
          className="flex-1 flex flex-col justify-center text-center p-5
         md:border-r-2 md:border-slate-200"
        >
          <h1 className="text-3xl font-bold">$89,914</h1>
          <p className="text-xl font-medium text-darkGray mt-3">
            of $100,000 backed
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center text-center p-5 md:border-r-2 md:border-slate-200">
          <h1 className="text-3xl font-bold">5,007</h1>
          <p className="text-xl font-medium text-darkGray mt-3">
            total backers
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center text-center p-5">
          <h1 className="text-3xl font-bold">56 </h1>
          <p className="text-xl font-medium text-darkGray mt-3">days left</p>
        </div>
      </div>
      <div className="progres mt-5 mb-11 h-4 bg-slate-300 w-[86%] mx-auto rounded-full">
        <div className="w-[60%] h-full bg-modCyan rounded-full"></div>
      </div>
    </div>
  );
};

export default Second;
