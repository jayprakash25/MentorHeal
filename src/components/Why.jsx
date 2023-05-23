import React from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";

const images = [image1, image2, image3, image4, image5, image6];

const text = ['One on One Mentorship','Top Mentors, the Leading Experts','Experienced On-Site Mentors','Confidential Conversations','Community Support','Authentic Guidance'];

const WhyCard = ({ image, content }) => {
  return (
    <div className="items-center flex-col flex m-auto">
      <img className="w-[80%] lg:w-[230px]" src={image} alt="" />

      <h1 className="text-[18px] lg:text-[26px] font-bold p-4 text-center">
        {content}
      </h1>
    </div>
  );
};

const Why = () => {
  return (
    <div className="bg-[#F3F7F5] m-8 rounded-3xl flex flex-col items-center justify-center">
      <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-poppins my-5">
        Why MentorThrive
      </h1>

      <div className="grid gap-3 md:grid-cols-3 lg:gap-10 py-4">
        {images.map((image, index) => (
          <WhyCard key={index} image={image} content={text[index]} />
        ))}
      </div>
    </div>
  );
};

export default Why;
