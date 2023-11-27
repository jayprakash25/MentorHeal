import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import NavBar from "./NavBar";
const Transformation = ({ testimonialref }) => {
  const slides = [
    {
      id: 1,
      story:
        ' "Their approach to wellness is truly holistic, taking into account all aspects of my life including nutrition, exercise, stress management, and self-care. My mentor was incredibly knowledgeable and supportive, providing me with personalized guidance and practical tools to help me achieve my goals. With their help, I was able to make significant improvements in my overall well-being and feel more empowered to take charge of my health. I highly recommend this company to anyone looking for a comprehensive and transformative wellness experience." ',
      name: "RAJ SONI ",
    },
    {
      id: 2,
      story:
        ' "I am amazed at the progress I have made. Their team of experts has helped me identify and overcome obstacles that were holding me back from achieving my full potential. Their approach to wellness is unique, combining evidence-based practices with a compassionate and supportive approach. They have helped me develop new habits and strategies for success that have improved my overall well-being and productivity. I am truly grateful for their support and highly recommend their services to anyone who is looking to live their best life." ',
      name: "RUDRA SINGH",
    },
    {
      id: 3,
      story:
        '"Their team is incredibly skilled, empathetic, and supportive, and they have helped me make significant improvements in my life. With their guidance, I have been able to overcome my limiting beliefs and tap into my full potential. Their approach to wellness is truly transformative, focusing on creating sustainable habits that promote overall well-being. I am extremely  grateful for their continued support, I highly recommend their services to anyone who is looking to live their best life." ',
      name: "VISHAL VERMA",
    },
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center my-8"
        ref={testimonialref}
      >
        <div className="text-center">
          <h1 className="py-4 text-3xl font-semibold md:text-4xl">
            Proud Stories Of{" "}
            <span className="font-bold text-center text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text ">
              Transformation
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center px-3.5">
        <>
          <Slider
            {...settings}
            className="w-[100vw] sm:w-[60vw] md:w-[50vw] mx-auto my-7"
          >
            {slides.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className=" space-y-7">
                    <p className="text-[#8ca1b3] leading-7">{item.story}</p>
                    <h1 className="bg-gradient-to-l text-center from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold my-3.5 lg:text-xl ">
                      {item.name}
                    </h1>
                  </div>
                </React.Fragment>
              );
            })}
          </Slider>
        </>
      </div>
    </>
  );
};

export default Transformation;

{
  /**/
}
