import React from "react";
import logoSara from "@/assets/logoSara.jpg";
import logoMdwx from "@/assets/logoMdwx.jpg";
import logoJmarioCouture from "@/assets/logoJmarioCouture.jpg";

const MobileBanner = () => {
  const links = [
    {
      id: 1,
      link: "",
      src: logoSara,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-[#6057ca] hover:shadow-[#6057ca] duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 2,
      link: "",
      src: logoMdwx,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-[#29fd04] hover:shadow-[#29fd04]   duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 3,
      link: "",
      src: logoJmarioCouture,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-[#fff] hover:shadow-[#fff] duration-300  cursor-pointer hover:shadow-xl shadow-md",
    },
  ];
  return (
    <div className=" lg:hidden flex items-center justify-center py-8 gap-5">
      {links.map(({ id, link, src, brand }) => (
        <a key={id} href={link} target="_blank" rel="noreferrer">
          <div>
            <img src={src} alt="" className={brand} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default MobileBanner;
