import ayush from "../assets/images/ayush.jpg";
import React from "react";

const CardAbout = () => {
  const data = [
    {
      Name: "Ayush Kulkarni",
      Position: "Co-Founder",
      Image: ayush,
      Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      Name: "Rohit Maini",
      Position: "CEO & Founder",
      Image: ayush,
      Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      Name: "Abhinav Singh",
      Position: "CTO",
      Image: ayush,
      Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    
  ];
  


  return (
    <div className="flex flex-col m-8 items-center justify-center">
      <div className="py-8">
        <h1 className="font-bold text-4xl lg:text-5xl text-[#00b8d3]">
          OUR TEAM
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-4 mt-6">
        {data.map((member, index) => {
          return (
            <React.Fragment key={index}>
              <div 
              data-aos = 'zoom-in'
              className="max-w-md hover:scale-105 ease-in-out duration-500 cursor-pointer shadow-md px-4">
                {/* <img
                  className="md:w-[30vw] rounded-lg"
                  src={member.imageUrl}
                  alt=""
                /> */}
                <div className="space-y-2.5 my-3">
                  <div className="text-xl md:text-2xl bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">
                    {member.Name}
                  </div>
                  <p className="text-cyan-500 font-semibold">
                    {member.Position}
                  </p>
                </div>
                <div className="my-3">
                  <p className="text-[#8ca1b3]">{member.Bio}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      
        {data.map((_, index) => {
          return (
            <div
              key={index}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={_.Image}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {_.Name}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {_.Position}
                </p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default CardAbout;
