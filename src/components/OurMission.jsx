import ourmission from "../assets/images/ourmission.png";

const OurMission = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-4 m-8 md:flex-row md:justify-between">
      <div 
      className="mt-4">
        <h1 className="font-bold text-[44px] md:text-[54px] text-[#00b8d3] lg:text-[64px]">
          Our Mission
        </h1>
        <p className="text-[#7C7C7C] font-medium leading-6 text-[13px] md:text-[16.5px] lg:text-[20px] md:leading-7 lg:leading-9 w-80 lg:w-[625px]">
          We’re building the economic infrastructure for the internet.
          Businesses of every size, be it new startups or public companies, use
          our software to accept payments and manage their businesses online.
        </p>
        <div className="flex justify-between p-2 mt-2">
          <div className="flex flex-col ">
            <h1 className="font-bold text-[34px] w-[79px]  lg:text-[52px] ">
              94%
            </h1>
            <p className="text-[8px] font-semibold  lg:text-[13px]">
              CLIENT RETENTION
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-[34px] w-[79px]  lg:text-[52px]">
              70M+
            </h1>
            <p className="text-[8px] font-semibold lg:text-[13px]">
              EMAILS PER MONTH
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-[34px] w-[79px] lg:text-[52px]">
              10K+
            </h1>
            <p className="text-[8px] font-semibold  lg:text-[13px]">
              MONTHLY CAMPAIGNS
            </p>
          </div>
        </div>
      </div>
      <div >
      <img src={ourmission} className=" md:w-[463px] md:h-auto " />
      </div>
    </div>
  );
};

export default OurMission;
