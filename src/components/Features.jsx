import React from "react";
import i1 from "../assets/feature-icon-1.97184e6bfaec9328776553973894fdad.svg";
import i2 from "../assets/feature-icon-2.550e13cc4bb589459d04e954d4d0797d.svg";
import i3 from "../assets/feature-icon-3.6c919c3d62b2dec60919fba179d20449.svg";
import i4 from "../assets/feature-icon-4.123488f722aa63b6b92bce877a69a021.svg";
import i5 from "../assets/feature-icon-5.5addfb3a53f18a9a0dbcf9f459307f66.svg";
import i6 from "../assets/feature-icon-6.dbf03c7fe2de6564b3cae658ed1cbabb.svg";

const cards = [
  {
    id: 1,
    img: i1,
    head: "Analytics Business",
    text: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },

  {
    id: 2,
    img: i2,
    head: "Wide Coverage Map",
    text: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },

  {
    id: 3,
    img: i3,
    head: "Artificial Intelligence",
    text: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
  {
    id: 4,
    img: i4,
    head: "Largest People",
    text: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
  {
    id: 5,
    img: i5,
    head: "Trusted & Secure",
    text: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
  {
    id: 6,
    img: i6,
    head: "Mobile Apps",
    text: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
];

const Features = () => {
  return (
    <div className="bg-[#def8f5] py-20">
      <h1 className=" text-3xl md:text-4xl text-center font-bold capitalize tracking-wider p-6">Meet our Quality Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center">
        {cards.map((card) => (
          <div className="p-10 md:p-6 flex flex-col justify-center items-center text-center" key={card.id}>
            <img src={card.img} alt=""/>
            <h2 className="capitalize p-3 font-semibold text-xl">{card.head}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
