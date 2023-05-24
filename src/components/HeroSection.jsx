import Button from "./Button";
import Hero from "../assets/images/Hero.png";

const HeroSection = () => {
  return (
    <div className="">
      <section className="px-5">
        <div className=" bg-[#F3F7F5] flex flex-col justify-between md:flex-row md:items-center my-8 md:px-5">
          <div className="mx-auto py-4">
          <img className="max-w-sm md:w-[35vw]" src={Hero} alt="hero.png" />
          </div>
          <div className="flex flex-col   justify-between items-center md:items-start px-5 py-8 space-y-6 md:space-y-9">
            <h1 className="text-2xl md:text-4xl font-inter md:max-w-[50vw] leading-9 font-semibold">
              Mentorship can help you embrace your potential!
            </h1>
            <p className="text-lg md:text-xl md:max-w-[40vw]">
              We all are already abundant. We just need a mentor to help us
              realise it.
            </p>
            <Button />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
