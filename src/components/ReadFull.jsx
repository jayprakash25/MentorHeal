import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { useLocation, useParams } from "react-router-dom";

export default function ReadFull() {
  const { id } = useParams();
  console.log(id);

  const data = useLocation();

  console.log(data);
  const [pdata, setpdata] = useState();

  return (
    <>
      <NavBar />
      <div className="pt-20">
        <img src={data.state.Background} className="" alt="" />
        <h1 className="absolute top-64 text-[#E27066] hidden md:block  md:text-5xl font-semibold left-44 ">
          {id}
        </h1>
      </div>

       <div className=" py-9 md:px-20 px-6 space-y-7">
      {data.state.Blog.map((item, index) => {
        return (
          
          <React.Fragment key={index}>
          <div className="flex justify-between">
           <button key={index}


            onClick={()=>{
              if(index == 0){
                setpdata(item.Points)
              }
              

            }}> 
            
            
            <h1 className="text-2xl text-gray-400 font-poppins shadow-md p-4">{item.Tittle.toUpperCase()}</h1></button>
           <p className={` font-inter max-w-lg`}>{pdata}</p> 
            </div>
          </React.Fragment>
        );
      })}


       </div>

      <Footer />
    </>
  );
}
