import React from "react";
import Data from "../../Data/MentorShipCategories";

export default function HeroSection({ setfilterCategeory }) {
  return (
    <div className="pt-20 bg-gradient-to-r from-cyan-500 via-cyan-500 to-cyan-400">
      <div className="pt-10 space-y-5 text-center text-white">
        <h1 className="text-lg font-semibold md:text-xl">
        Connect with experienced, qualified and certified mentors across the country
        </h1>
        <h1 className="text-2xl font-bold md:text-3xl">
          What do you want to discuss about?
        </h1>
      </div>
      <div className="flex flex-col justify-center max-w-xs gap-6 mx-auto lg:flex-row py-7 lg:py-10">
        {Data.map((item, i) => {
          return (
            <button
              className="px-5 py-1 font-semibold text-black duration-300 ease-in-out bg-white rounded-lg md:px-7 lg:px-10 lg:text-sm hover:brightness-90"
              key={i}
              onClick={() => {
                setfilterCategeory(item);
              }}
            >
              <h1>{item}</h1>
            </button>
          );
        })}
      </div>
    </div>
  );
}
