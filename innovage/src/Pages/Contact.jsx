import React from "react";
import img from "../assets/contact.png";
import { FaLocationDot, FaPhone, FaLink } from "react-icons/fa6";

function Contact() {
  return (
    <div className="bg-black text-gray-500">
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl loading-snug font-bold mb-5">
          Get In Touch, Be part of the family
        </h2>
      </div>
      <div className="max-w-screen-xl pb-60 mx-auto grid lg:grid-cols-2 items-center gap-20 ">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="mx-auto text-left">
          <ul className="text-2xl">
            <li className=" hover:text-orange-500 cursor-pointer py-5 transition duration-200 inline-flex px-4 items-center">
              {/* <span className="mr-2 w-4 text-gray-500 ">Website:</span> */}
              <FaLink className="mr-3 " />
              innovage.inc
            </li>
            <hr className="w-[350px]" />
            <li className=" hover:text-orange-500 cursor-pointer py-5 transition duration-200 inline-flex items-center px-4">
              {/* <span className="mr-2 w-4 text-gray-500 ">Contact:</span> */}
              <FaPhone className="mr-3 " />
              +233-59-677-5574
            </li>
            <hr className="w-[350px]" />

            <li className=" hover:text-orange-500 cursor-pointer inline-flex items-center py-5 transition duration-200 px-4">
              {/* <span className="mr-2 w-4 text-gray-500 ">Location</span> East */}
              <FaLocationDot className="mr-3 " />
              Legon, Pawpaw st.
            </li>
            <hr className="w-[350px]" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
