import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export default function Quote() {
  const quotes = [
    {
      id: 1,
      img: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
      quote:
        "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design",
    },
    {
      id: 2,
      img: "https://media.wired.com/photos/5c377ecde1c834084b57a611/4:3/w_2396,h_1797,c_limit/Culture_Monitor_Bezos.jpg",
      quote:
        "We see our customers as invited guests to a party, and we are the hosts. It's our job every day to make every important aspect of the customer experience a little bit better",
    },
    {
      id: 3,
      img: "https://media.gettyimages.com/id/1057636522/photo/alibaba-chairman-jack-ma-speaking-duirng-the-hongqiao-international-economic-and-trade-forum.jpg?s=612x612&w=0&k=20&c=_332Hwtwa6uC0nJZwJqAsN5BFZuTBp5H2WuS1AC8Zoc=",
      quote:
        "Help young people. Help small guys. Because small guys will be big. Young people will have the seeds you bury in their minds, and when they grow up, they will change the world",
    },
  ];

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
  };

  return (
    <>
      <div className="flex flex-col items-center px-5 md:px-8 my-24">
        <div>
          <h1 className="py-4 text-3xl font-semibold md:text-5xl">
            Wellness Builds
            <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
              {" "}
              Character{" "}
            </span>
          </h1>
        </div>
      </div>
      <Slider {...settings} className=" w-[100vw] lg:w-[60vw] mx-auto my-12">
        {quotes.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
                <div>
                  <img
                    src={item.img}
                    className="max-w-xs rounded-lg md:max-w-md"
                    alt=""
                  />
                </div>
                <div className="max-w-xs px-5 md:px-0">
                  <h1 className="text-[#8ca1b3] md:text-xl font-semibold leading-9">
                    {item.quote}
                  </h1>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </Slider>
    </>
  );
}
