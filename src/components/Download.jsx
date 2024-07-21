import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import d from "../assets/download-app.webp";
import d1 from "../assets/gallery-1.webp";
import d2 from "../assets/gallery-2.webp";
import d3 from "../assets/gallery-3.webp";
import d4 from "../assets/gallery-4.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import c from "../assets/call-to-action-1.124aeb383f0f57c0263b8a5cec78b5ba (1).png";

const Download = ({ items }) => {
  return (
    <div className="py-20 px-4 " id="download">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center ">
        <img src={d} alt="" />
        <div className="text text-center md:text-left space-y-2">
          <h1 className="md:text-3xl  text-2xl pt-7 font-bold">
            Connecting our user with iOS & Android apps. Download from iTune &
            Play store
          </h1>

          <p className="py-2 md:py-4">
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool. We’re
            driven beyond just finishing the projects. We want to find solutions
            using our website & apps.
          </p>
          <div className=" flex  gap-5 w-full md:m-auto justify-center md:justify-start">
            <button className=" w-[200px] lg:w-[250px] p-2 flex justify-center items-center hover:text-white text-center capitalize rounded-3xl hover:bg-[#081c27] border-2 border-[#081c27] transition-colors duration-500">
              <div className="cd flex gap-4 items-center">
                <FaApple />
                <div className="cdt">
                  <p className="text-[.71rem] lg:text-[1rem]">
                    download on the{" "}
                  </p>
                  <p className="capitalize font-bold text-[.891rem] lg:text-xl">
                    app store
                  </p>
                </div>
              </div>
            </button>
            <button className="bg-[#fff] w-[200px] lg:w-[250px] p-2 flex justify-center items-center hover:text-white text-center capitalize rounded-3xl hover:bg-[#081c27] border-2 border-[#081c27] transition-colors duration-500">
              <div className="cd flex gap-4 items-center">
                <FaGooglePlay />
                <div className="cdt">
                  <p className="text-[.71rem] lg:text-xl">download on the </p>
                  <p className="capitalize font-bold text-[.891rem] lg:text-xl">
                    google play
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:gap-0 gap-3 mt-20 md:py-20">
        <img src={d1} alt="" />
        <img src={d2} alt="" className="m-0 md:mt-10" />
        <img src={d3} alt="" />
        <img src={d4} alt="" className="m-0 md:mt-10" />
      </div>

      <div className="text py-13 space-y-6 text-center md:px-30 lg:px-40">
        <h1 className="text-2xl md:text-3xl font-bold capitalize pt-8 md:pt-5">
          Let’s take your Delivery Experience to the next level
        </h1>
        <p>
          Pick one of our stock themes, or create your custom theme with the
          most advanced theme editor on any online survey building tool. Pick
          one of our stock themes, or create your custom theme with the most
          advanced theme editor on any online survey building tool.
        </p>
      </div>
      <div className="grid py-20 md:py-30 grid-cols-1 md:grid-cols-2 items-center space-y-10">
        <img src={c} alt="" className="pt-20" />
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-bold text-2xl capitalize md:text-3xl">
            Your order knocking on the door. Please receive
          </h1>
          <p>
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online.
          </p>
          <div className="flex mt-5  bg-[#0ece9d] w-[190px] relative px-6 py-3 rounded-3xl justify-center md:ml-0 text-center m-auto cursor-pointer">
            <button className=" text-white  capitalize">discover more</button>
            <div className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 text-[#0ece9d]">
              <FaLongArrowAltRight className="w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer  w-full mt-7 mb-[-100px] ">
        <ul className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 lg:gap-6 capitalize p-7">
          {items.map((item) => (
            <li>
              <a
                href={item.tag}
                className="font-semibold cursor-pointer hover:text-[#0ece9d]"
              >
                {item.nam}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Download;
