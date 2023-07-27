import Aos from "aos";
import React, { useEffect } from "react";

const TeamCard = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Yuvraj Singh",
      position: "Career",
      bio: "Dr. Yuvraj Singh is a highly accomplished and revered career mentor who has dedicated his life to empowering individuals to achieve their professional goals and unlock their fullest potential. With over two decades of experience in the corporate world and as an academician, he possesses a deep understanding of the challenges and opportunities that arise throughout one's career journey.",
      imageUrl: "",
    },
    {
      id: 2,
      name: "Deepika shetty",
      position: "Spirituality",
      bio: "Deepika Shetty is a renowned spiritual mentor, guide, and advocate for personal transformation and inner growth. With a profound understanding of spirituality and a genuine passion for helping others, she has touched the lives of countless individuals, leading them towards a deeper sense of self-awareness, peace, and purpose.",
      imageUrl: "",
    },
    {
      id: 3,
      name: "Rahul Menon",
      position: "Relationships",
      bio: "Rahul Menon is a highly respected and sought-after relationship mentor who has dedicated his life to helping individuals build healthy, fulfilling, and harmonious connections in their personal lives. With a deep understanding of human behavior and emotions, Rahul provides invaluable guidance to those seeking to navigate the complexities of relationships with compassion and wisdom.",
      imageUrl: "",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="my-20 mx-10">
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold p-8 text-center">
          Meet your{" "}
          <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent bg-clip-text font-bold">
            premier advisors
          </span>
          , the
          <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">
            {" "}
            leading experts
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-4 my-16">
        {teamMembers.map((member, index) => {
          return (
            <React.Fragment key={index}>
              <div
                data-aos="fade"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                className="max-w-md hover:scale-105 ease-in-out duration-500 cursor-pointer  px-4 border-[1px] border-slate-200 shadow-sm"
              >
                {/* <img
                  className="md:w-[30vw] rounded-lg"
                  src={member.imageUrl}
                  alt=""
                /> */}
                <div className="space-y-2.5 my-3 text-center">
                  <div className="text-xl md:text-2xl bg-gradient-to-l from-cyan-600 via-cyan-400 to-cyan-500 text-transparent  bg-clip-text font-bold">
                    {member.name}
                  </div>
                  <p className="text-cyan-500 font-semibold">
                    {member.position}
                  </p>
                </div>
                <div className="my-3">
                  <p className="text-[#8ca1b3] leading-8">{member.bio}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCard;
