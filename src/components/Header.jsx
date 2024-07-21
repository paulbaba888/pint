import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";


const Header = ({items}) => {
  const [menu, setMenu] = useState(false);
  function openMenu() {
    setMenu(!menu);
  }



  return (
    <div className="p-4  flex justify-between z-20 bg-white fixed items-center w-full ">
      <div className="cursor-pointer">
        <a className="text-xl capitalize font-extrabold tracking-wider">
          p.<span className="font-mono text-[#0ece9d]">int</span>
        </a>
      </div>
      <nav>
        <ul className="hidden md:flex gap-5 lg:gap-6 md:gap-3">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.tag}
                className=" md:text-[.978rem] lg:text-[1.239rem] tracking-wider capitalize  hover:text-[#0ece9d]  transition-colors duration-500 
                 text-[#081c27]"
              >
                {item.nam}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden gap-5 md:flex capitalize">
        <button
          className="bg-transparent capitalize hover:text-[#0ece9d] border-2 border-[#0ece9d] px-5 transition-colors duration-500 hover:border-2 hover:border-[#081c27] t
        "
        >
          login
        </button>
        <button className="bg-[#081c27] w-[120px] p-2 flex justify-center items-center text-white text-center capitalize rounded-2xl hover:text-[#081c27] hover:bg-white transition-colors duration-500 hover:border-2 ">
          join free
        </button>
      </div>
      <div className="flex md:hidden cursor-pointer text-2xl hover:text-[#0ece9d] ">
        {menu ? (
          <MdOutlineClose className="font-bold" onClick={openMenu} />
        ) : (
          <RiMenu4Fill className="font-bold" onClick={openMenu} />
        )}
      </div>
      {menu && (
        <ul className=" flex md:hidden  gap-4 top-full mt-3 p-4 absolute flex-col border-2 border-[#0ece9d] w-[90%] rounded-2xl text-center m-auto left-0 right-0 bg-white">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.tag}
                className="tracking-wider capitalize text-[1.2rem] hover:text-[#0ece9d] transition-colors duration-500"
              >
                {item.nam}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
