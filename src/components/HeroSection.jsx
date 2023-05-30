import img1 from "../assets/images/img1.svg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
// ..


const  HeroSection = () => {
  useEffect(()=>{

    AOS.init();
  },[])


  return (
    <div className="pt-36">
      <section className="px-5 ">
        <div className="flex flex-col justify-between md:flex-row md:items-center my-5 md:px-5">
          <div data-aos="fade-left"  className="mx-auto py-4 animate__animated animate__fadeInLeft">
            <img className="max-w-sm md:w-[44vw]" src={img1} alt="hero.png" />
          </div>
          <div className="flex flex-col animate__animated animate__fadeInRight justify-between items-center md:items-start px-5 py-8 space-y-6 md:space-y-9">
            <h1 className="text-2xl md:text-4xl md:max-w-[40vw] leading-10 font-semibold">
              <span className="text-[#00b8d3]">Mentorship</span> can help you
              embrace your potential!
            </h1>
            <p className="text-lg md:text-xl md:max-w-[40vw]">
              We all are already abundant. We just need a mentor to help us
              realize it. Discover Your purpose.
            </p>
            <button className=' bg-[#00b8d3] text-white  ease-in-out duration-500 font-semibold text-sm border-zinc-600 px-5 py-2 rounded-full'>
              Get Started
            </button>   
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
