import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24  mx-auto fixed w-screen px-24 bg-[#faf6f0]">
      <h1 className="w-full text-3xl font-bold ">KHOMSA_</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Projects</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={!nav ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-[#ddd0c0] bg-[#faf6f0] ease-in-out duration-500" : "fixed top-0 left-[-100%] w-[60%] h-full border-r border-r-[#ddd0c0] bg-[#faf6f0] ease-in-out duration-500"}
      >
        <h1 className="w-full text-3xl font-bold  m-4">KHOMSA_</h1>
        <ul className=" uppercase p-4">
          <li className="p-4  border-b border-[#ddd0c0]">Home</li>
          <li className="p-4  border-b border-[#ddd0c0]">Projects</li>
          <li className="p-4  border-b border-[#ddd0c0]">About</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
