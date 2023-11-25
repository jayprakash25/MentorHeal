import React from "react";
import { NavBar } from "../components/index";
import { Data } from "../Data/index";
import { LiaGreaterThanSolid } from "react-icons/lia";

export default function MentorShipPage() {
  return (
    <>
      <NavBar />
      {/* Herosection-1 */}
      <div className="bg-[#fef2ef] lg:bg-[#f9f9f9] lg:flex lg:justify-evenly lg:items-center pt-28 px-5 pb-8 lg:shadow-sm">
        <div>
          <img
            src="https://www.soulup.in/cdn/shop/files/Website-3_copy_2.jpg?v=1672729690"
            alt="img1"
            className="max-w-md lg:max-w-xl"
          />
        </div>

        <div className="max-w-md pl-3 mt-5 lg:max-w-">
          <h1 className="text-3xl font-bold lg:text-5xl">
            The SoulUp Peer Network
          </h1>
          <p className="text-[#6d6667] my-4 text-lg lg:text-xl">
            At SoulUp we are building a unique network which allows everyone to
            benefit from each other’s lived experiences.{" "}
          </p>
          <p className="my-4 text-[#6d6667] text-lg g:text-xl">
            If you have learned something from your journey and are ready to
            share it as well as build on your emotional progress - join SoulUp
            as a Peer.{" "}
          </p>
          <button className="flex items-center mt-6 justify-center px-6 py-2 space-x-2 font-semibold text-black duration-500 ease-in-out rounded-full bg-gradient-to-r from-[#ffeba0] to-[#f6d65e] hover:border-[1px] hover:border-zinc-800">
            <h1>Join the Peer Network</h1>
            <LiaGreaterThanSolid size={18} color="black" />
          </button>
        </div>
      </div>
      {/* Why join the Peer network? */}
      <section className="flex flex-col items-center justify-center my-8 gap-5  lg:flex-none lg:w-[70vw] mx-auto lg:space-y-20">
        {Data.map((_, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-start justify-start gap-3 lg:flex-row lg:gap-7 lg:items-end lg:justify-end">
                <div
                  className={`max-w-md lg:max-w-xl  ${
                    (i + 1) % 2 == 0 ? "lg:order-2" : "null"
                  } `}
                >
                  <img src={_.image} alt="" />
                </div>
                <div className="max-w-md space-y-3">
                  <h1 className="flex items-center mt-5 space-x-2">
                    <span className="text-[#f9d6cc] font-bold">{i + 1}</span>
                    <span>
                      {" "}
                      <LiaGreaterThanSolid size={15} color="#d3d2d3" />
                    </span>
                  </h1>
                  <h1 className="text-xl font-bold lg:text-3xl">{_.Tittle}</h1>
                  <p className=" text-[#6d6667] ">{_.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>

      {/* Join our network! */}

      <section className="my-8">
        <div className="bgclip bg-[#fef2ef] ml-5 py-14 px-2 pl-3 lg:pl-28 lg:w-[80vw] lg:mx-auto">
          <div className="max-w-xs space-y-6 lg:max-w-xl">
            <p className="w-48 text-sm font-semibold lg:text-2xl">
              Believe in the power of lived-experience sharing?
            </p>
            <h1 className="text-xl font-bold lg:text-4xl">
              Join our growing Peer network!
            </h1>
            <button className="border-[1px] border-black flex items-center  rounded-full justify-center space-x-5 px-6 py-2">
              <h1 className="text-sm font-semibold">Get Started</h1>
              <LiaGreaterThanSolid size={18} color="black" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
