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
    <div className="mx-10 my-20">
      <div>
        <h1 className="p-8 text-3xl font-semibold text-center md:text-5xl">
          Meet your{" "}
          <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
            premier advisors
          </span>
          , the
          <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
            {" "}
            leading experts
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 my-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {teamMembers.map((member, index) => {
          const newLocal = "space-y-2.5 my-3 text-center";
          return (
            <React.Fragment key={index}>
              <div
                data-aos="fade"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                className="max-w-md rounded-md hover:scale-105 ease-in-out duration-500 cursor-pointer  px-4 border-[1px] border-gray-200   shadow-md shadow-gray-100"
              >
                <div className={newLocal}>
                  <div className="text-xl font-bold text-transparent md:text-2xl bg-gradient-to-l from-cyan-600 via-cyan-400 to-cyan-500 bg-clip-text">
                    {member.name}
                  </div>
                  <p className="font-semibold text-cyan-500">
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
