import { Link } from "react-router-dom";
import Carddata from "./Data";
import { useEffect } from "react";
import AOS from "aos";
export const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center grid-cols-3 gap-5 my-16 md:grid md:px-5">
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
            <div className="flex justify-center duration-300 ease-in-out cursor-pointer hover:scale-105">
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                className="max-w-[80vw] md:w-[30vw] shadow-sm border-[0.3px] border-gray-200 rounded-lg flex flex-col items-center space-y-5 p-5"
              >
                {/* <div
              data-aos = "zoom-in"
               className="max-w-[80vw] md:w-[30vw] shadow-sm border-[0.3px] border-gray-200 rounded-lg flex flex-col items-center space-y-5 p-5"> */}
                <img
                  src={item.image}
                  className="py-2 mt-4 bg-white rounded-full w-44"
                />
                <h1 className="text-3xl font-bold ">{item.Title}</h1>
                <p className="text-center text-[#8ca1b3] text-sm leading-6">
                  {item.Para}
                </p>
                <p className=" cursor-pointer  text-[#00b8d3]">Read More</p>
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
    <div className="px-4 bg-[#DAFFFB] ">
      <section className=" my-28">
        <div className="items-center md:flex md:flex-row-reverse p-7 md:justify-around md:space-x-5 md:px-5">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="flex flex-col order-2 py-5 space-y-8 text-center md:text-left"
          >
            <h1 className="text-2xl md:text-4xl md:max-w-[50vw] leading-8 font-semibold">
              How will{" "}
              <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
                Mentorship
              </span>{" "}
              help you?
            </h1>
            <p className="text-sm text-[#8ca1b3] md:max-w-[50vw] md:text-lg leading-6 md:leading-7">
              Through the guidance and support of a mentor, individuals can gain
              valuable insights, develop new skills, and overcome obstacles that
              they may have otherwise struggled with on their own. Whether in
              buisness, personal life, or any other aspect of life.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="my-5 md:my-0"
          >
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
