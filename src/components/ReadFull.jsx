import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { useLocation, useParams } from "react-router-dom";
import Aos from "aos";
import Whatsup from "./Whatsup";
import Appointment from "./Appointment";

export default function ReadFull() {
  const { id } = useParams();
  // console.log(id);

  const data = useLocation();

  const [point, setPoint] = useState(0);

  // console.log(data);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const location = useLocation(); // import { useLocation } from 'react-router-dom';

  useEffect(() => {
    // Scroll top when location changes
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

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 space-x-14 space-y-10 md:space-y-0 py-14">
        <div className="flex flex-col-reverse md:flex-row lg:flex-col">
          {data.state.Blog.map((item, index) => {
            return (
              <div data-aos="fade-right" key={index}>
                <button
                className="px-4 py-2 my-2 w-52 shadow-md"
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

        <div data-aos="fade-left" className=" max-w-2xl space-y-3">
          <h1 className="font-semibold bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text text-xl md:text-2xl lg:text-3xl py-4">
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
      <Appointment/>
      <Whatsup/>
      <Footer />
    </>
  );
}
