import ourVision from "../assets/images/ourVision.png";

const OurVision = () => {
  return (
    <div className="grid grid-cols-1 m-8 md:grid-cols-2 place-items-center md:gap-4 ">
      <div>
        <img className="w-[369px]" src={ourVision} />
      </div>
      <div className="mt-10 font-medium lg:w-[40vw] text-[#7C7C7C]  ">
        <h1 className="text-[#00b8d3] font-bold text-2xl lg:text-5xl">OUR VISION</h1>
        <p className="text-[#7C7C7C] font-semibold leading-5 text-[13px] md:text-[16.5px]  md:leading-7 lg:leading-9 w-80 lg:w-[40vw] mt-5">
          Our vision is to create a world where individuals can attain complete
          well-being in all these dimensions, enabling them to unlock their
          highest potential and live a life that resonates with their innermost
          purpose. We believe that true excellence is a journey, and we are
          dedicated to walking this transformative path with our mentors and
          mentees, providing them with the tools, knowledge, and mentorship
          necessary to help them achieve holistic balance and become their most
          authentic selves. MentorHeal offers a platform that connects
          individuals with certified mentors and fosters meaningful connections
          in various life domains, ensuring that they can confidently pursue
          their unique paths of growth and fulfillment.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
