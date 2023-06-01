import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { useLocation, useParams } from "react-router-dom";
import Aos from "aos";

export default function ReadFull() {
  const { id } = useParams();
  // console.log(id);

  const data = useLocation();

  const [point, setPoint] = useState(0);

  // console.log(data);

  useEffect(()=> {
    Aos.init({duration: 2000});
  },[])

  return (
    <>
      <NavBar />
      <div className="pt-20">
        <img src={data.state.Background} className="" alt="" />
         <h1 className="absolute top-64 text-[#E27066] hidden md:block  md:text-5xl font-semibold left-44 ">
          {id}
         </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 space-x-14 space-y-10 md:space-y-0 py-14">
      <div className="flex flex-col-reverse md:flex-row lg:flex-col">
        {data.state.Blog.map((item, index) => {
        return (
          
          <div 
          data-aos = 'fade-right'
          key={index}>
           <button key={index}
            onClick={()=>{
              setPoint(index)
            }}> 
            <h1 className="text-lg text-gray-400 font-poppins shadow-md p-4">{item.Tittle.toUpperCase()}</h1></button>
           
          </div>

        );
      })}
      </div>

      <div 
      data-aos = 'fade-left'
      className=" max-w-2xl space-y-3"> 
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl py-4">{data.state.Blog[point].Tittle}</h1>
        {data.state.Blog[point].Points.map((item, index) => {
          return(
            <React.Fragment key={index}>
            <div className="flex gap-2">
          o<p className="font-semibold text-sm md:text-lg">{item.toLowerCase()}</p>
          </div>
          </React.Fragment>
          )
        })}
            </div>
       </div>

      <Footer />
    </>
  );
}
