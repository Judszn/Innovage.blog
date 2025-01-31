import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaDribbble,
  FaXTwitter,
  FaBarsStaggered,
  FaXmark,
} from "react-icons/fa6";
import Modal from "./Modal";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //navItems

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className="text-white  fixed top-0   left-0 right-0 bg-black">
      <nav className="px-4 py-4 max-w-7xl mx-auto  flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Innovage <span className="text-orange-400">Inc.</span>
        </a>
        {/* {navItems for large devices} */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* { menu icons} */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaXTwitter />
          </a>
          <button
            onClick={openModal}
            className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 cursor-pointer"
          >
            Log in
          </button>
        </div>

        {/* Our Modal Component is here */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/* {mobile menu btn, display mobile screen} */}
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <FaXmark /> : <FaBarsStaggered className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {/* menu items only for mobile items */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink to={path} onClick={toggleMenu}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
