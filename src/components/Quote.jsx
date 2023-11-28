import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export default function Quote() {
  const quotes = [
    {
      id: 1,
      img: "https://blackhattalent.com/wp-content/uploads/2023/08/robinsharma.jpg",
      quote:
        "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CE0tFpz5ha5WekWiYr8B9f2cs-F5ZVNd9NKk-FQbUVS0GZnc-G9MDWI2LaccXCS-dhI&usqp=CAU",
      quote:
        "We see our customers as invited guests to a party, and we are the hosts. It's our job every day to make every important aspect of the customer experience a little bit better",
    },

    {
      id: 12,
      img: "https://akm-img-a-in.tosshub.com/lingo/hrb/images/story/202302/untitled-design-2023-02-16t165401077160223050538.png?size=945:532",
      quote:
        "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design",
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
      <div className="flex flex-col items-center px-5 my-10 md:px-8">
        <div>
          <h1 className="py-4 text-3xl font-semibold md:text-4xl">
            Wellness Builds
            <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
              {" "}
              Character{" "}
            </span>
          </h1>
        </div>
      </div>
      <Slider {...settings} className=" w-[100vw] lg:w-[60vw] mx-auto mt-8">
        {quotes.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
                <div>
                  <img
                    src={item.img}
                    className="max-w-xs rounded-lg md:max-w-md grayscale"
                    alt=""
                  />
                </div>
                <div className="max-w-xs">
                  <h1 className="text-[#8ca1b3] md:text-xl  leading-7 lg:leading-10">
                    "{item.quote}"
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

{
  /* */
}
