import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import HeroPic from "../assets/images/HeroPic.jpeg";
import { Link } from "react-router-dom";
// ..

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pt-16">
      <section className="px-5 ">
        <div className="flex flex-col justify-between my-5 lg:flex-row md:items-center md:px-5">
          <div className="py-4 mx-auto">
            <img
              className="max-w-xs md:max-w-lg"
              src={HeroPic}
              alt="hero.png"
            />
          </div>
          <div className="flex flex-col items-center justify-between lg:px-5 py-8 space-y-6 animate__animated animate__fadeInRight md:items-start lg:space-y-9">
            <h1 className="text-2xl md:text-4xl lg:max-w-[40vw] leading-10 font-semibold">
              <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
                Mentorship
              </span>{" "}
              can help you embrace your potential!
            </h1>
            <p className="text-lg text-[#8ca1b3] md:text-xl md:max-w-[40vw]">
              We are all already abundant. We just need a mentor to help us
              realise it and discover our purpose
            </p>
            <Link to="/how">
              <button className="px-5 py-2 text-sm font-semibold text-white duration-500 ease-in-out rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-400 border-zinc-600">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
