import React from "react";
import {
  FaRegPenToSquare,
  FaFacebookMessenger,
  FaRegNewspaper,
  FaRegRectangleList,
  FaMoneyBillTransfer,
  FaAdversal,
  FaHeadset,
  FaRegCalendarCheck,
  FaChartSimple,
} from "react-icons/fa6";

function Services() {
  return (
    <div className="bg-black text-gray-600">
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl loading-snug font-bold mb-5">
          Services
        </h2>
      </div>
      <div className="max-w-5xl flex items-center justify-center mx-auto lg:pb-[300px] pb-10">
        <ul className="grid sm:grid-cols-2 w-full m-5 md:grid-cols-2 lg:grid-cols-3  items-center gap-x-5 gap-y-5">
          <li className="inline-flex items-center border-2 border-gray-50 border-opacity-5 rounded-md py-6 bg-gray-800 text-2xl cursor-pointer hover:text-violet-600 px-3">
            <FaRegPenToSquare className="mr-3" />
            Copy Writing
          </li>
          <li className="inline-flex items-center border-2 border-gray-50 border-opacity-5 rounded-md py-6 bg-gray-800 text-2xl px-3 cursor-pointer hover:text-violet-600">
            <FaRegCalendarCheck className="mr-3" />
            Event Documentary
          </li>
          <li className="inline-flex items-center border-2 border-gray-50 border-opacity-5 rounded-md py-6 bg-gray-800 text-2xl px-3 cursor-pointer hover:text-violet-600">
            <FaFacebookMessenger className="mr-3" /> Media
          </li>
          <li className="inline-flex items-center border-2 border-gray-50 border-opacity-5 rounded-md py-6 bg-gray-800 text-2xl px-3 cursor-pointer hover:text-violet-600">
            <FaAdversal className="mr-3" />
            Advertising
          </li>
          <li className="inline-flex items-center border-2 border-gray-50 border-opacity-5 rounded-md py-6 bg-gray-800 text-2xl px-3 cursor-pointer hover:text-violet-600">
            <FaChartSimple className="mr-3" />
            Marketing
          </li>
          <li className="inline-flex items-center border-2 border-gray-50 border-opacity-5 rounded-md py-6 bg-gray-800 text-2xl px-3 cursor-pointer hover:text-violet-600">
            <FaMoneyBillTransfer className="mr-3" />
            Sales/Records
          </li>
          <li className="inline-flex items-center border-gray-50 border-opacity-5 rounded-md py-6 bg-gray-800 text-2xl px-3 cursor-pointer hover:text-violet-600">
            <FaRegRectangleList className="mr-3" />
            Data Entry
          </li>
          <li className="inline-flex items-center border-gray-50 border-opacity-5 rounded-md py-6 bg-gray-800 text-2xl px-3 cursor-pointer hover:text-violet-600">
            <FaRegNewspaper className="mr-3" />
            Professional Writing
          </li>
          <li className="inline-flex items-center border-gray-50 border-opacity-5 rounded-md py-6 bg-gray-800 text-2xl px-3 cursor-pointer hover:text-violet-600">
            <FaHeadset className="mr-3" />
            Expert Advice
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
