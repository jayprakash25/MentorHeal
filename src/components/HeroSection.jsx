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
        <div className="flex flex-col justify-between lg:flex-row md:items-center my-5 md:px-5">
          <div
            data-aos="fade-left"
            className="mx-auto py-4 animate__animated animate__fadeInLeft"
          >
            <img
              className="max-w-xs md:max-w-lg"
              src={HeroPic}
              alt="hero.png"
            />
          </div>
          <div className="flex flex-col animate__animated animate__fadeInRight justify-between items-center md:items-start px-5 py-8 space-y-6 lg:space-y-9">
            <h1 className="text-2xl md:text-4xl lg:max-w-[40vw] leading-10 font-semibold">
              <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">
                Mentorship
              </span>{" "}
              can help you embrace your potential!
            </h1>
            <p className="text-lg text-[#8ca1b3] md:text-xl md:max-w-[40vw]">
              We all are already abundant. We just need a mentor to help us
              realize it. Discover Your purpose.
            </p>
            <Link to="/how">
              <button className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-400 text-white  ease-in-out duration-500 font-semibold text-sm border-zinc-600 px-5 py-2 rounded-full">
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
