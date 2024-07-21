import React from "react";
import t1 from "../assets/testimonials-block-image (1).webp";
import t2 from "../assets/testimonials-1-1.a46129816eea4b42aa181a7c7367bab9.png";
import t3 from "../assets/testimonials-qoute-1-1.437534f2d6b9eecd3764cb5943c89048.svg";
const Testimonial = () => {
  return (
    <div className="py-20 px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <img src={t1} alt="" />

        <div className="relative space-y-2">
          <img src={t3} alt="" className="absolute top-[100px] left-0" />
          <h1 className="text-center md:p-6 p-5 font-bold text-3xl capitalize md:text-4xl">
            What - people - say-about - us
          </h1>
          <p>
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool. We’re
            driven beyond just finishing the projects.{" "}
          </p>
          <div className="flex items-center gap-3">
            <img src={t2} alt="" />
            <div className="t space-y-2">
              <h5 className="capitalize font-semibold">mariana dickey</h5>
              <p className="capitalize">ui designer</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Testimonial;
