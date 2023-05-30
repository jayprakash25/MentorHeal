import Profile from "../assets/images/profile.png";
import React from "react";




const TeamCard = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Abhinav Singh",
      position: "CTO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: Profile,
    },
    {
        id: 2,
        name: "Ayush Kulkarni",
        position: "Founder & CEO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        name: "Ansh Singh",
        position: "Founder & CEO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        name: "Ansh Singh",
        position: "Founder & CEO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        name: "Ansh Singh",
        position: "Founder & CEO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        name: "Ansh Singh",
        position: "Founder & CEO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
    // Add more team members here
  ];

  return (
    <div className="m-8">
    <h1 className="text-3xl md:text-5xl font-semibold p-8 text-center">Meet your <span className="text-[#00b8b3]">premier advisors</span>, the<span className="text-[#00b8b3]"> leading experts</span>.</h1>
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-4 mt-6">
      {teamMembers.map((member, index) => {
       
        return (
            <React.Fragment key={index}>
      <div className="max-w-sm mx-auto rounded overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
        {/* <img className="" src={member.imageUrl} alt="" /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{member.name}</div>
          <p className="text-gray-700 text-base">{member.position}</p>
        </div>
        <div className="px-6 py-4 pt-1">
          <p className="text-gray-700 text-base">{member.bio}</p>
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
