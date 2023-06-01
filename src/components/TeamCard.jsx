import Aos from "aos";
import React, { useEffect } from "react";

const TeamCard = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Abhinav Singh",
      position: "CTO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.pexels.com/photos/16756606/pexels-photo-16756606/free-photo-of-man-and-woman-together-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Ayush Kulkarni",
      position: "Founder & CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
      imageUrl:
        "https://images.pexels.com/photos/16756606/pexels-photo-16756606/free-photo-of-man-and-woman-together-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Ayush Kulkarni",
      position: "Founder & CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.pexels.com/photos/16756606/pexels-photo-16756606/free-photo-of-man-and-woman-together-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    // Add more team members here
  ];

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <div className="mx-8">
    <div data-aos = 'zoom-in'>
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
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-4 mt-6">
        {teamMembers.map((member, index) => {
          return (
            <React.Fragment key={index}>
              <div 
              data-aos = 'flip-right'
              className="max-w-md hover:scale-105 ease-in-out duration-500 cursor-pointer">
                <img
                  className="md:w-[30vw] rounded-lg"
                  src={member.imageUrl}
                  alt=""
                />
                <div className="space-y-2.5 my-3">
                  <div className="text-xl md:text-2xl bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">
                    {member.name}
                  </div>
                  <p className="text-cyan-500 font-semibold">
                    {member.position}
                  </p>
                </div>
                <div className="my-3">
                  <p className="text-[#8ca1b3]">{member.bio}</p>
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
