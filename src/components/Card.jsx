import { Link } from "react-router-dom";
import Carddata from "./Data";
import { useEffect } from "react";
import AOS from "aos";
export const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="grid grid-cols-1 gap-5 p-8 px-5 my-16 md:grid-cols-2 lg:grid-cols-3">
      {Carddata.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/${item.Title}`}
            state={{
              Tittle: item.Title,
              Background: item.Background,
              Blog: item.Blog,
            }}
          >
            <div className="flex justify-center  duration-300 ease-in-out cursor-pointer hover:shadow-md shadow-slate-50">
              <div className="shadow-sm border-[0.3px] border-gray-200 rounded-lg flex flex-col items-center space-y-5 p-4">
                <img
                  src={item.image}
                  className=" mt-4 bg-[#d1cfcf] rounded-full w-28 h-28"
                />
                <h1 className="text-3xl font-bold text-center">{item.Title}</h1>
                <p className="text-center lg:h-20 text-[#8ca1b3] font-semibold  leading-6">
                  {item.Para}
                </p>
                <p className=" cursor-pointer  text-[#00b8d3] font-bold border-cyan-500">
                  Read More
                </p>
                {/* </div> */}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export const FirstCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="px-5 bg-[#4f82a2] ">
      <section className=" my-28">
        <div className="items-center md:flex md:flex-row-reverse p-7 px-0 md:justify-around md:space-x-5 md:px-5">
          <div className="flex flex-col order-2 py-5 space-y-8 text-center md:text-left">
            <h1 className="text-2xl text-white md:text-4xl md:max-w-[50vw] leading-8 font-semibold">
              How will{" "}
              <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
                Mentorship
              </span>{" "}
              help you?
            </h1>
            <p className="text-sm text-white md:max-w-[50vw] md:text-lg leading-6 md:leading-7">
              Through the guidance and support of a mentor, individuals can gain
              valuable insights, develop new skills, and overcome obstacles that
              they may have otherwise struggled with on their own. Whether in
              buisness, personal life, or any other aspect of life.
            </p>
          </div>
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
