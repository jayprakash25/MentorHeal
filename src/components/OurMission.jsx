import ourmission from "../assets/images/ourmission.png";

const OurMission = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-4 m-8 md:flex-row md:justify-between ">
      <div className="mt-4">
        <h1 className="font-Kanit text-2xl lg:text-5xl text-[#4a7999] ">
          Our Mission
        </h1>
        <p className="text-[#7C7C7C] font-Kanit leading-5 text-[13px] md:text-[16.5px]  md:leading-7 lg:leading-9 w-80 lg:w-[40vw] mt-5">
          MentorHeal aims to be India’s pioneering holistic wellness brand,
          guided by a profound understanding of the privilege of human existence
          and the profound potential within each individual. Recognizing that
          life consists of four essential dimensions - physical health (body),
          mental health (mind), emotional health (heart), and spiritual health
          (soul) - we are on a mission to empower people to lead truly
          fulfilling lives by harmonizing these aspects.
        </p>
        {/* <div className="flex justify-between p-2 mt-2">
          <div className="flex flex-col ">
            <h1 className="font-bold text-[34px] w-[79px]  lg:text-[52px] ">
              94%
            </h1>
            <p className="text-[8px] font-Kanit  lg:text-[13px]">
              CLIENT RETENTION
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-[34px] w-[79px]  lg:text-[52px]">
              70M+
            </h1>
            <p className="text-[8px] font-Kanit lg:text-[13px]">
              EMAILS PER MONTH
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-[34px] w-[79px] lg:text-[52px]">
              10K+
            </h1>
            <p className="text-[8px] font-Kanit  lg:text-[13px]">
              MONTHLY CAMPAIGNS
            </p>
          </div>
        </div> */}
      </div>
      <div>
        <img src={ourmission} className=" md:w-[463px] md:h-auto grayscale" />
      </div>
    </div>
  );
};

export default OurMission;
