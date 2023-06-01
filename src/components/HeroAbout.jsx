import { useEffect } from "react";
import heromobile from "../assets/images/Heromobile.png";
import heroweb from "../assets/images/Heroweb.png";
import "animate.css";
import Aos from "aos";
const HeroAbout = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#e8f4ef] to-[#faebe5]   mt-0   flex flex-col-reverse md:flex-row  items-center pt-14 ">
        <div className="flex flex-col items-center  mx-auto px-6">
        <div data-aos = 'zoom-in'>
          <h1 className="font-poppins text-xl md:text-4xl lg:text-5xl leading-9 md:leading-[50px] lg:leading-[65px] lg:w-[573px] text-center py-4 md:pt-16">
            We're <span className="text-[#00b8d3]">changing</span> the whole
            game.
          </h1>
          </div>
          <div className="font-poppins flex gap-2 md:gap-4 pb-8 md:pb-0 md:my-5 text-[11px]  items-center">
          <div data-aos = 'fade-right'>
            <button className="bg-[#00b8d3] outline-double outline-1 text-white rounded-3xl px-6 py-3  transition duration-300 ease-in-out ">
              Get Started
            </button>
            </div>
            <div data-aos = 'fade-left'>
            <button className="bg-[#00b8d3] text-white outline-double outline-1 rounded-3xl px-6 py-3 transition duration-300 ease-in-out">
              View Pricing
            </button>
            </div>
          </div>
        </div>
        <img className="md:hidden max-w-xs p-4" src={heromobile} />
        {/* <img className="hidden md:flex " src={heroweb} /> */}
      </div>
    </div>
  );
};

export default HeroAbout;
