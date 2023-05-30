import { Link } from "react-router-dom";
import Carddata from "./Data";
export const Card = () => {
  return (
    <div className="flex flex-col items-center my-16 justify-center gap-5 md:grid grid-cols-3 md:px-5">

      {Carddata.map((item, index) => {
        return (
          <Link  key={index} to={`/${item.Title}`} state={{ Tittle: item.Title, Background: item.Background, Blog: item.Blog,}}>
            <div className="flex justify-center hover:scale-105 duration-300 ease-in-out cursor-pointer">
            
              <div className="max-w-[80vw] md:w-[30vw] shadow-sm border-[0.3px] border-gray-200 rounded-lg flex flex-col items-center space-y-5 p-5">
                <img src={item.image} className="bg-white py-2 rounded-full w-24 mt-4"/>
                <h1 className="text-3xl font-bold ">{item.Title}</h1>
                <p className="text-center text-[#8ca1b3] text-sm leading-6">{item.Para}</p>
                <p className=" cursor-pointer  text-[#00b8d3]">
                  Read More
                </p>
              </div>

            </div>
          </Link>
        );
      })}

    </div>
  );
};

export const FirstCard = () => {
  return (
    <div className="px-4 ">
      <section className=" my-16 ">
        <div className=" md:flex md:flex-row-reverse p-7 md:justify-around  items-center md:space-x-5 md:px-5">
         
          {/* --------------text----------- */}
          <div className="space-y-8 flex py-5 flex-col text-center md:text-left order-2">
            <h1 className="text-2xl md:text-4xl md:max-w-[50vw] leading-8 font-semibold">
              How will <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">Mentorship</span> help
              you?
            </h1>
            <p className="text-sm text-[#8ca1b3] md:max-w-[50vw] md:text-lg leading-6 md:leading-7">
              Through the guidance and support of a mentor, individuals can gain
              valuable insights, develop new skills, and overcome obstacles that
              they may have otherwise struggled with on their own. Whether in
              business, personal life, or any other aspect of life.
            </p>
          </div>
         
          {/* ------------image------------ */}
          <div className="my-5 md:my-0">
            <img
              className="md:max-w-[20vw]  rounded-lg"
              alt="hero"
              src="https://i.ibb.co/ssvmKXG/image-1.png"
            />
          </div>

        </div>
      </section>
    </div>
  );
};
