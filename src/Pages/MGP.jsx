import React from "react";
import { Footer, NavBar } from "../components";

export default function MGP({ page }) {
  const Events = [
    {
      image:
        "https://www.soulup.in/cdn/shop/files/4_0895d2f3-5ffe-4023-bf06-3a8b65155c11.png?v=1686193954&width=750",
      list: [
        "Sign up for ANY 3 MentorHeal groups (except for those priced INR 4000 or more)",
        "For users in India, price of 2 group pack is INR 7500 (instead of INR 10,500)",
        "For users outside India, price of 2 group pack is INR 11,500 (instead of INR 15,000)",
      ],
      off: "40",
    },
    {
      image:
        "https://www.soulup.in/cdn/shop/files/3_e5a0328a-6cf0-4140-abf9-3d250c9e6d00.png?v=1686193953&width=750",
      list: [
        "Sign up for ANY 3 MentorHeal groups (except for those priced INR 4000 or more)",
        "For users in India, price of 2 group pack is INR 7500 (instead of INR 10,500)",
        "For users outside India, price of 2 group pack is INR 11,500 (instead of INR 15,000)",
      ],
      off: "20",
    },
  ];

  return (
    <section className={` ${page === "home" ? "mb-20 mt-14" : null} `}>
      {page === "home" ? null : <NavBar />}
      {page === "home" ? (
        <div className="text-3xl font-semibold text-center font-cardo md:text-4xl ">
          <h1>
            MentorHeal{" "}
            <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
              Guidance
            </span>{" "}
            Program
          </h1>
        </div>
      ) : null}
      <div className={`flex justify-center `}>
        <div
          className={` 
          ${
            page === "home"
              ? "flex lg:flex-row flex-col justify-around gap-20 "
              : "px-4 pt-16 mx-auto mb-14"
          }
        `}
        >
          {Events.map((_, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  className={`flex flex-col items-start justify-center gap-5 mt-11 lg:gap-8  ${
                    page === "home" ? "flex-col" : "lg:flex-row"
                  }`}
                >
                  <img
                    className="max-w-xs duration-500 ease-in-out cursor-pointer md:max-w-sm lg:max-w-lg hover:brightness-75"
                    src={_.image}
                    alt=""
                  />
                  <ul className="max-w-sm">
                    <h1 className="text-3xl font-bold md:text-4xl">
                      Save on 3 Groups
                    </h1>
                    <p className="mt-3.5 font-semibold text-gray-500">
                      what will you get:
                    </p>
                    {_.list.map((i) => {
                      return <li className="mt-3.5 text-gray-500 ">{i}</li>;
                    })}
                    <button className="flex items-center justify-center px-6 py-2 mt-8 space-x-2 font-semibold text-white duration-500 ease-in-out rounded-full bg-cyan-400">
                      <h1>Get up to {_.off}%</h1>
                    </button>
                  </ul>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {page === "home" ? null : <Footer />}
    </section>
  );
}
