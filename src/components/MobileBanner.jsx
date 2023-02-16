import React from "react";
import logoSara from "@/assets/logoSara.jpg";
import logoMdwx from "@/assets/logoMdwx.jpg";
import logoJmarioCouture from "@/assets/logoJmarioCouture.jpg";
import logoMagicripped from "@/assets/logoMagicripped.jpg";
import logoVoufit from "@/assets/logoVoufit.jpg";

const MobileBanner = () => {
  const links = [
    {
      id: 1,
      link: "https://sarazapata.vercel.app/",
      src: logoSara,
      brand:
        "rounded-full object-cover w-14 h-14 md:w-40 md:h-40 shadow-[#6057ca] hover:shadow-[#6057ca] duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 4,
      link: "https://sara-voufit.vercel.app/",
      src: logoVoufit,
      brand:
        "rounded-full object-cover w-14 h-14 md:w-40 md:h-40 shadow-white hover:shadow-white duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 2,
      link: "https://sara-madwax.vercel.app/",
      src: logoMdwx,
      brand:
        "rounded-full object-cover w-14 h-14 md:w-40 md:h-40 shadow-[#29fd04] hover:shadow-[#29fd04]   duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 3,
      link: "https://sara-jmario.vercel.app/",
      src: logoJmarioCouture,
      brand:
        "rounded-full object-cover w-14 h-14 md:w-40 md:h-40 shadow-[#fff] hover:shadow-[#fff] duration-300  cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 5,
      link: "https://sara-magicripped.vercel.app/",
      src: logoMagicripped,
      brand:
        "rounded-full object-cover w-14 h-14 md:w-40 md:h-40 shadow-[#fd0101] hover:shadow-[#fd0101] duration-300  cursor-pointer hover:shadow-xl shadow-md",
    },
  ];
  return (
    <div className=" lg:hidden flex items-center justify-center py-8 md:gap-5 gap-2">
      {links.map(({ id, link, src, brand }) => (
        <a key={id} href={link}>
          <div>
            <img src={src} alt="" className={brand} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default MobileBanner;
