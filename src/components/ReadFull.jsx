import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { useLocation, useParams } from "react-router-dom";

export default function ReadFull() {
  const { id } = useParams();

  const data = useLocation();

  console.log(data);

  return (
    <>
      <NavBar />
      <div>
        <img src={data.state.Background} alt="" />
        <h1 className="absolute top-64 text-[#E27066] hidden md:block  md:text-5xl font-semibold left-44 ">
          {id}
        </h1>
      </div>
       <div className=" py-9 md:px-20 px-6 space-y-7">
      {data.state.Blog.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <h1 className="text-3xl text-[#E27066] font-semibold">{item.Tittle.toUpperCase()}</h1>
            <p>{item.Points.toLowerCase()}</p>
          </React.Fragment>
        );
      })}
       </div>
      <Footer />
    </>
  );
}
