import React from "react";

export default function Quote() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl">
          Even the Most{" "}
          <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">
            Sucessfull
          </span>{" "}
          Struggle
        </h1>
      </div>

      <div className="flex flex-col gap-8 md:flex-row justify-evenly items-center my-24">
        <div className="md:max-w-2xl text-center p-3 md:p-0 md:order-1 order-2">
          <q className="leading-8  font-semibold text-[#8ca1b3]">
            Success is not the absence of struggle, but rather the relentless
            pursuit of overcoming it. Even after achieving great heights, the
            struggle persists, for it is the fuel that drives innovation and
            propels us towards a better tomorrow. Embrace the challenges, for
            they are the stepping stones on the path to extraordinary
            achievements. - Elon Musk
          </q>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg"
            alt="person"
            className="max-w-md rounded-xl"
          />
        </div>
      </div>
    </>
  );
}
