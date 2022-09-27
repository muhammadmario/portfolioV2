import React, { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <nav className="sticky top-0 z-50 flex w-full justify-between h-16  items-center px-4 bg-[#EEEEEE] md:px-24 border-[#2C3333] border-b-2">
      <h1 className="text-lg">Mario</h1>
      <ul
        className={`flex-col z-50 absolute bg-[#EEEEEE] top-0 right-0 h-screen  w-3/4 mt-16 transition md:translate-x-0 md:h-fit md:w-fit md:static md:mt-0 md:flex-row ${
          toggleNav ? "flex gap-3" : "hidden translate-x-full"
        }  md:flex md:gap-3`}
      >
        <a href="#home" onClick={handleToggleNav}>
          <li
            className={`w-full text-center border-b-2 border-[#2C3333] cursor-pointer md:border-none  ${
              toggleNav ? "pt-3 md:pt-0" : ""
            }`}
          >
            Home
          </li>
        </a>

        <a href="#about" onClick={handleToggleNav}>
          <li className="w-full text-center border-b-2 border-[#2C3333] cursor-pointer md:border-none">
            About
          </li>
        </a>

        <a href="#project" onClick={handleToggleNav}>
          <li className="w-full text-center border-b-2 border-[#2C3333] cursor-pointer md:border-none">
            Project
          </li>
        </a>

        <a href="#skills" onClick={handleToggleNav}>
          <li className="w-full text-center border-b-2 border-[#2C3333] cursor-pointer md:border-none">
            Skills
          </li>
        </a>

        <a href="#contact" onClick={handleToggleNav}>
          <li className="w-full text-center border-b-2 border-[#2C3333] cursor-pointer md:border-none">
            Contact
          </li>
        </a>
      </ul>
      <div className="md:hidden" onClick={handleToggleNav}>
        {toggleNav ? <IoCloseOutline /> : <IoMenuOutline />}
      </div>
    </nav>
  );
}

export default Navbar;
