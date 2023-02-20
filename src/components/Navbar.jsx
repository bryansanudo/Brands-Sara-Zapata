import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logoSara from "@/assets/logoSara.jpg";
import logoMdwx from "@/assets/logoMdwx.jpg";
import logoJmarioCouture from "@/assets/logoJmarioCouture.jpg";
import logoMagicripped from "@/assets/logoMagicripped.jpg";
import logoVoufit from "@/assets/logoVoufit.jpg";
import logoGelam from "@/assets/logoGelam.jpg";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "https://sara-marcas.vercel.app/",
      src: logoSara,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-[#6057ca] hover:shadow-[#6057ca] duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 4,
      link: "https://gelam.vercel.app/",
      src: logoGelam,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-[#7abd22] hover:shadow-[#7abd22] duration-300  cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 2,
      link: "https://sara-voufit.vercel.app/",
      src: logoVoufit,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-white hover:shadow-white   duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },

    {
      id: 3,
      link: "https://sara-jmario.vercel.app/",
      src: logoJmarioCouture,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-white hover:shadow-white duration-300  cursor-pointer hover:shadow-xl shadow-md",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-40 opacity-50 text-white z-20 hover:opacity-100 ">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-10">
              {links.map(({ id, link, src, brand }) => (
                <a key={id} href={link}>
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
        </div>
      </div>

      <div
        className={`fixed w-full bg-black text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <div className="flex flex-col gap-5">
          {links.map(({ id, link, src, brand }) => (
            <a
              key={id}
              onClick={() => setIsMenuShown(!isMenuShown)}
              href={link}
            >
              <img src={src} alt="" className={brand} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
