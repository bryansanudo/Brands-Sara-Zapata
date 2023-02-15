import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logoSara from "@/assets/logoSara.jpg";
import logoMdwx from "@/assets/logoMdwx.jpg";
import logoJmarioCouture from "@/assets/logoJmarioCouture.jpg";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "",
      src: logoSara,
      brand:
        "rounded-full object-cover w-40 h-40 shadow-[#6057ca] hover:shadow-[#6057ca] duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 1,
      link: "",
      src: logoMdwx,
      brand:
        "rounded-full object-cover w-40 h-40 shadow-[#29fd04] hover:shadow-[#29fd04]   duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 1,
      link: "",
      src: logoJmarioCouture,
      brand:
        "rounded-full object-cover w-40 h-40 shadow-[#fff] hover:shadow-[#fff] duration-300  cursor-pointer hover:shadow-xl shadow-md",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-40 opacity-50 text-white z-20 hover:opacity-100 ">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-10">
              {links.map(({ id, link, src, brand }) => (
                <a key={id} href={link} target="_blank" rel="noreferrer">
                  <div>
                    <img src={src} alt="" className={brand} />
                  </div>
                </a>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer "
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {/* <Link to="">
            <div>
              <img
                src={logoSara}
                alt=""
                className="rounded-full object-cover w-16 h-16 hover:scale-110 duration-300 shadow-lg shadow-thOrange"
              />
            </div>
          </Link> */}
        </div>
      </div>

      <div
        className={`fixed w-full bg-black text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <a
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
                {link}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
