import React from "react";

function Modal({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-[20px] w-full h-full flex mt-9 justify-end rounded-lg ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-gray-800  p-5 h-96 lg: w-[300px]">
          {/* modal content */}
          <div className="flex items-center justify-between ">
            <h2 className="text-md font-semibold  mt-6 mb-5  px-1">Login</h2>
            <button
              onClick={onClose}
              className="bg-red-600 hover:bg-white text-white hover:text-red-600 font-semibold  w-[25px] h-[25px]   rounded-full   justify-end    "
            >
              ×
            </button>
          </div>
          <form className="px-1">
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium outline-none text-[#687240] focus:border-[#6a64f1] focus:shadow:md"
              />
            </div>
            <div className="mb-7">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="xxxxxxxxxxx"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium outline-none text-[#687240] focus:border-[#6a64f1] focus:shadow:md"
              />
            </div>
            <div className="flex w-full justify-between">
              <button className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-white hover:text-green-500 py-3 px-8 text-base font-semibold text-white outline-none">
                Login
              </button>
              <button className="hover:shadow-md rounded-md bg-gray-400 ml-2 hover:bg-white hover:text-green-500 py-3 px-8 text-base font-semibold text-white outline-none">
                Sign Up
              </button>
            </div>
          </form>
          {/* close button */}
        </div>
      </div>
    </div>
  );
}
export default Modal;
