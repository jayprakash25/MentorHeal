import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { useLocation, useParams } from "react-router-dom";
import Aos from "aos";
import Whatsup from "./Whatsup";
import Appointment from "./Appointment";

export default function ReadFull() {
  const { id } = useParams();

  const data = useLocation();

  const [point, setPoint] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavBar />
      <div className="pt-20">
        {/* <img src={data.state.Background} className="" alt="" /> */}
        <h1 className=" top-64 text-[#001C30] hidden md:block pl-44  md:text-5xl font-poppins  ">
          {id}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center px-4 space-y-10 lg:flex-row lg:items-start space-x-14 md:space-y-0 py-14">
        <div className="flex flex-col-reverse md:flex-row lg:flex-col">
          {data.state.Blog.map((item, index) => {
            return (
              <div data-aos="fade-right" key={index}>
                <button
                  className="px-4 py-2 my-2 shadow-md w-52"
                  key={index}
                  onClick={() => {
                    setPoint(index);
                  }}
                >
                  <h1 className="text-lg text-gray-400 font-poppins">
                    {item.Tittle.toUpperCase()}
                  </h1>
                </button>
              </div>
            );
          })}
        </div>

        <div data-aos="fade-left" className="max-w-2xl space-y-3 ">
          <h1 className="py-4 text-xl font-semibold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text md:text-2xl lg:text-3xl">
            {data.state.Blog[point].Tittle}
          </h1>
          {data.state.Blog[point].Points.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex gap-2">
                  o
                  <p className="text-[#676767] text-sm font-semibold">
                    {item.toUpperCase()}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <Appointment />
      <Whatsup />
      <Footer />
    </>
  );
}
