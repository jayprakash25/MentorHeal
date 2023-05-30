import React from "react";
import Banner from "../assets/images/Banner1.png";
export default function Events() {
  const Event = {
    Banner: Banner,
    Tittle: "Lorem ipsum dolor sit amet.",
    SubTitle:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,omnis mollitia deserunt ex iure labore!",
    Para: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    Registerd: "100",
  };
  return (
    <div className="-my-48 mb-32 md:mb-20 ">
      <div className="">
        <div className="md:translate-y-96 translate-y-80 pl-16">
          <div className="space-y-4 md:space-y-8 text-white">
            <h1 className="text-xl md:text-4xl font-bold">{Event.Tittle}</h1>
            <h2 className="text-sm md:text-lg font-semibold">
              {Event.SubTitle}
            </h2>
            <p className="text-sm">{Event.Para}</p>
            <button className="bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-400  px-6 py-2.5 text-xs md:text-sm rounded-full">
              Enquiry Now
            </button>
          </div>

          <div className="py-7">
            <div className="bg-white md:max-w-[12vw] text-center rounded-lg max-w-[30vw]">
              <h1 className="font-bold">{Event.Registerd}+</h1>
              <h1 className="bg-cyan-500  text-sm font-semibold p-1 text-white">
                Corporate Partners
              </h1>
            </div>
          </div>
        </div>

        <img
          src={Event.Banner}
          className="h-[55vh] md:h-[70vh] w-screen object-cover"
          alt="banner"
        />
      </div>

    </div>
  );
}
