import youth from "../assets/images/youth.jpg";
import beacon from "../assets/images/beacon.jpg";

const Prophecy = () => {
  return (
    <div className="py-8 m-8">
      <div>
        <h1 className="font-bold  text-[44px] leading-[50px] md:text-[54px]  text-center py-8">
          MentorHeal&apos;s Prophecy
        </h1>
      </div>

      <div className="space-y-2">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-around ">
          <div className="py-5 space-y-2 ">
            <h1 className="text-2xl lg:text-3xl text-[#00b8d3] font-semibold">
              Enable youth empowerment
            </h1>
            <p className="text-[#7C7C7C] font-medium text-[13px] md:text-[16.5px] lg:text-[20px] leading-6 md:leading-7 lg:leading-9 w-80 lg:w-[625px]">
              Shaping a Holistic Wellness Movement: We envision a world where
              well-being is prioritized, and individuals are equipped with the
              knowledge, tools, and mentors to navigate their wellness journeys.
            </p>
          </div>
          <div className="max-w-xs">
            <img src={youth} />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center md:flex-row-reverse md:justify-around">
          <div className="py-5 space-y-2">
            <h1 className="text-2xl lg:text-3xl text-[#00b8d3] font-semibold">
              Become the beacon of learning
            </h1>
            <p className="text-[#7C7C7C] font-medium text-[13px] md:text-[16.5px] lg:text-[20px] leading-6 md:leading-7 lg:leading-9 w-80 lg:w-[625px]">
              Inspiring Authentic Purpose: Through mentorship, we aim to guide
              individuals in exploring their unique talents, embracing their
              passions, and channeling them towards meaningful contributions.
            </p>
          </div>
          <div className="max-w-sm">
            <img src={beacon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prophecy;
