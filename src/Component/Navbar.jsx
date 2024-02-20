import React, { useState } from "react";
import { Link, Element } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "project",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "blog",
    },
  ];

  return (
    <nav className="w-full h-14 bg-indigo-400 flex justify-between px-4 items-center text-white sticky top-0 backdrop-blur-md bg-opacity-50 z-50 ">
      <div>
      <h1 name="home" className="text-2xl text-indigo-900 font-bold cursor-pointer">
        Durgesh
      </h1>
      </div>
      <div className="md:flex space-x-4">
      <ul className="md:flex font-semibold hidden ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="mx-[10px] capitalize cursor-pointer hover:scale-105 duration-200 "
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      </div>
      <button className="hidden md:block text-white px-2 py-1 bg-indigo-700 rounded-md font-bold hover:bg-indigo-500 hover:scale-105 duration-200 "  onClick={() => window.location.href = 'mailto:dg13974@gmail.com'} >
        Contact
      </button>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 z-10 text-indigo-900 "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#818cf8] to-[#d8b4fe] text-white backdrop-blur-md border-t-4 border-indigo-600">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:border-b-2 border-indigo-600  text-center hover:scale-105 duration-200"
            >
             <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl text-white font-bold hover:border-b-4 border-indigo-600  text-center">
          <button className=" hover:bg-rose-300 px-4 py-2 rounded-md transition duration-200 bg-indigo-700 hover:scale-105"  onClick={() => window.location.href = 'mailto:dg13974@gmail.com'}>
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
