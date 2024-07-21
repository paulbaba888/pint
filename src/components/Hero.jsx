import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Banner from "../assets/banner-1.webp";
const Hero = () => {
  return (
    <div className="px-4  grid grid-cols-1 md:grid-cols-2 gap-7 items-center min-h-[660px] bg-[#fffff]">
      <div className="text space-y-8 mt-40 text-center md:text-left ">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold capitalize">
          Your favorite food, delivered to your home
        </h1>
        <p className="text-xl text-black ">
          Food, drinks, groceries, and more available for delivery and pickup.
        </p>
        <div className=" bg-white w-[80%] md:w-[70%] m-auto md:ml-0 ">
          <div className="   border items-center ">
            <div className="flex gap-4 items-center relative">
              <div className="v ml-2">
                <CiLocationOn className="text-[#081c27] text-3xl cursor-pointer" />
              </div>
              <input
                type="email"
                placeholder="email address"
                className=" px-2 py-2  focus:outline-none w-full"
              />
              <div className="c">
                <FaLongArrowAltRight className="w-10  text-white  h-full bg-[#081c27] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="cd space-y-4">
          <p>Apps Available to download on</p>
          <div className=" flex  gap-5 w-full md:m-auto items-center justify-center md:justify-start">
            <button className=" w-[200px] md:w-[220px] p-2 flex justify-center items-center hover:text-white text-center capitalize rounded-3xl hover:bg-[#081c27] border-2 border-[#081c27] transition-colors duration-500">
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
            <button className="bg-[#fff] w-[200px] md:w-[220px] p-2 flex justify-center items-center hover:text-white text-center capitalize rounded-3xl hover:bg-[#081c27] border-2 border-[#081c27] transition-colors duration-500">
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
      <div className="image w-[80%] lg:w-[70%] ">
        <img src={Banner} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
