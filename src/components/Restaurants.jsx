import React from "react";
import img1 from "../assets/amirali-mirhashemian-sc5sTPMrVfk-unsplash (1).jpg";
import img2 from "../assets/food-photographer-E94j3rMcxlw-unsplash.jpg";
import img3 from "../assets/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import img4 from "../assets/jonas-kakaroto-zlKdLdMREtE-unsplash.jpg";
import img5 from "../assets/mae-mu-I7A_pHLcQK8-unsplash.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import i1 from "../assets/how-works-1.webp";
import i2 from "../assets/how-works-2.webp";
import i3 from "../assets/how-works-3.webp";
import delivery from "../assets/deliver-products.png";

const cards = [
  {
    id: 1,
    image: img1,
    nam: "Pizza Hut Delicious Pizza",
    tag1: "American",
    tag2: "fast Food",
    tag3: "burgers",
  },
  {
    id: 2,
    image: img2,
    nam: "Chubby Noodle Chinese Takeout",
    tag1: "American",
    tag2: "fast Food",
    tag3: "burgers",
  },
  {
    id: 3,
    image: img3,
    nam: "Chipotle Mexican Grill (2675 Geary)",
    tag1: "American",
    tag2: "fast Food",
    tag3: "burgers",
  },
  {
    id: 4,
    image: img4,
    nam: "McDonald's® Burgers (Fillmore)",
    tag1: "American",
    tag2: "fast Food",
    tag3: "burgers",
  },
  {
    id: 5,
    image: img5,
    nam: "Shake Shack (3060 Fillmore Street)",
    tag1: "American",
    tag2: "fast Food",
    tag3: "burgers",
  },
];
const buttons = [
  {
    id: 1,
    tag: "pizza",
  },
  {
    id: 2,
    tag: "breakfast",
  },
  {
    id: 3,
    tag: "japanese",
  },
  {
    id: 4,
    tag: "halal",
  },
  {
    id: 5,
    tag: "dessert",
  },
  {
    id: 6,
    tag: "lebanese",
  },
  {
    id: 7,
    tag: "american",
  },
  {
    id: 8,
    tag: "sushi",
  },
  {
    id: 9,
    tag: "greek",
  },
  {
    id: 10,
    tag: "thai",
  },
  {
    id: 11,
    tag: "vegetarian",
  },
  {
    id: 12,
    tag: "italian",
  },
  {
    id: 13,
    tag: "mexican",
  },
  {
    id: 14,
    tag: "indian",
  },
  {
    id: 15,
    tag: "chinese",
  },
  {
    id: 16,
    tag: "breakfast",
  },
  {
    id: 17,
    tag: "burgers",
  },
];
const Restaurants = () => {
  return (
    <div className=" py-20 px-4  text-center" id="restaurants">
      <h1 className="mb-9 capitalize font-bold text-3xl  md:text-3xl  m-auto">
        Available Restaurant Nearby Area
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-0">
        {cards.map((card) => {
          return (
            <div
              className=" py-2 h-[300px] w-[300px] md:w-[230px] xl:w-[400px] m-auto text-left  cursor-pointer"
              key={card.id}
            >
              <img
                src={card.image}
                alt=""
                className=" h-[70%] w-full max-w-full object-cover hover:scale-95 transition-transform duration-500 m-auto"
              />
              <div className=" space-y-3 md:space-y-4">
                <a
                  href="#"
                  className="hover:text-[#eb4d4b] transition-colors duration-500 font-semibold capitalize pt-2 block"
                >
                  {card.nam}
                </a>
                <div className="flex gap-1 flex-wrap">
                  <p className="hover:text-[#0ece9d]"> {card.tag1}</p> .{" "}
                  <p className="hover:text-[#0ece9d]">{card.tag2}</p> .{" "}
                  <p className="hover:text-[#0ece9d]">{card.tag3}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex mt-7  md:mb-20  bg-[#0ece9d] w-[190px] relative px-6 py-3 rounded-3xl justify-center text-center m-auto cursor-pointer ">
        <button className=" text-white  capitalize">discover more</button>
        <div className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 text-[#0ece9d]">
          <FaLongArrowAltRight className="w-5 text-white" />
        </div>
      </div>
      <div className="categories mt-9">
        <h1 className=" p-5 mb-6 capitalize font-bold text-3xl  m-auto">
          Popular categories by food
        </h1>

        <div className="cards px-1 md:px-40 flex items-center justify-center gap-5 flex-wrap">
          {buttons.map((button) => (
            <button
              key={button.id}
              className="bg-[#f1f5f8] hover:bg-[#0ece9d] transition-colors duration-500 hover:text-white px-4 py-2 rounded-3xl"
            >
              {button.tag}
            </button>
          ))}
        </div>
      </div>

      <div className="works pt-20">
        <h1 className=" mb-9 capitalize font-bold text-3xl  m-auto">
          Let’s see how it works
        </h1>
        <div className="cards flex gap-5 flex-wrap X justify-center ">
          <div className="card w-[280px] md:w-[350px] relative">
            <img src={i1} alt="" className="z-20" />
            <h2 className="absolute top-2 left-[20px] text-xl font-bold text-white bg-[#0ece9d] w-[50px] h-[50px] rounded-full grid items-center z-[-1]">
              01
            </h2>
            <h4 className="text-xl font-semibold">Become a Delivery Man</h4>
            <p className="p-3">
              As a delivery driver, you'll make reliable money—working anytime,
              anywhere.
            </p>
            <div className="flex mt-1 w-[220px]  relative px-6 py-3  justify-center text-center m-auto cursor-pointer">
              <button className=" text-[#3a94ff] font-semibold capitalize">
                start earning
              </button>
              <div className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 text-[#3a94ff]">
                <FaLongArrowAltRight className="w-[30px]" />
              </div>
            </div>
          </div>
          <div className="card w-[280px] md:w-[350px] relative">
            <img src={i2} alt="" />
            <h2 className="absolute top-[-6px] left-[35px] text-xl font-bold text-white bg-[#0ece9d] w-[50px] h-[50px] rounded-full grid items-center z-[-1]">
              02
            </h2>
            <h4 className="text-xl font-semibold">Become a Partner</h4>
            <p className="p-3">
              Grow your business and reach new customers by partnering with us.
            </p>
            <div className="flex  w-[260px] relative px-6 py-3  justify-center text-center m-auto cursor-pointer">
              <button className=" text-[#3a94ff] font-semibold  capitalize">
                Sign up your store
              </button>
              <div className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 text-[#3a94ff]">
                <FaLongArrowAltRight className="w-[30px]" />
              </div>
            </div>
          </div>
          <div className="card w-[280px] md:w-[350px] relative">
            <img src={i3} alt="" />
            <h2 className="absolute top-[-18px] left-[50px] text-xl font-bold text-white bg-[#0ece9d] w-[50px] h-[50px] rounded-full grid items-center z-[-1]">
              03
            </h2>
            <h4 className="text-xl font-semibold">Try Android/iOS App</h4>
            <p className="p-3">
              Get the best DoorDash experience with live order tracking.
            </p>
            <div className="flex  w-[220px] relative px-6 py-3  justify-center text-center m-auto cursor-pointer">
              <button className=" text-[#3a94ff]  capitalize font-semibold">
                get the app
              </button>
              <div className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 text-[#3a94ff]">
                <FaLongArrowAltRight className="w-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products py-20 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="image w-[80%] m-auto">
          <img src={delivery} alt="" className="w-full animate" />
        </div>
        <div className="text space-y-5">
          <h1 className="text-2xl lg:text-3xl font-semibold capitalize tracking-wider ">
            We deliver our products as fast as superman can do
          </h1>
          <p className="">
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool.
          </p>
          <div className="text2">
            <div className="flex items-center justify-center p-10 md:p-4">
              <h1 className="font-bold text-2xl">01</h1>
              <div className="other">
                <h3 className="font-semibold text-2xl capitalize">
                  Easy to use application
                </h3>
                <p className="p-3">
                  We’re driven beyond just finishing the projects. We want to
                  find solutions using our website & apps.
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center p-10 md:p-4">
              <h1 className="font-bold text-2xl">02</h1>
              <div className="other">
                <h3 className="font-semibold text-2xl capitalize">
                  Deliver Food within 30 min
                </h3>
                <p className="p-3">
                  We’re driven beyond just finishing the projects. We want to
                  find solutions using our website & apps
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-10 md:p-4">
              <h1 className="font-bold text-2xl">03</h1>
              <div className="other ">
                <h3 className="font-semibold text-2xl capitalize">
                  100% Reliable with Privacy
                </h3>
                <p className="p-3">
                  We’re driven beyond just finishing the projects. We want to
                  find solutions using our website & apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
