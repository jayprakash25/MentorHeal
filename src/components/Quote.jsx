import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export default function Quote() {
  const quotes = [
    {
      id: 1,
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2023-07/230724-elon-musk-ac-1041p-bc05fb.jpg",
      quote:
        "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design",
    },
    {
      id: 2,
      img: "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg",
      quote:
        "We see our customers as invited guests to a party, and we are the hosts. It's our job every day to make every important aspect of the customer experience a little bit better",
    },

    {
      id: 12,
      img: "https://api.time.com/wp-content/uploads/2014/09/jack-ma-alibaba-life-lessons-clinton-global-initiative.jpg?quality=85&w=3000",
      quote:
        "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design",
    },
    {
      id: 203,
      img: "https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg",
      quote:
        "We see our customers as invited guests to a party, and we are the hosts. It's our job every day to make every important aspect of the customer experience a little bit better",
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
      <div className="flex flex-col items-center px-5 my-24 md:px-8">
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
      <div className="flex flex-col items-center justify-center gap-10 mx-auto mt-12 lg:flex-row">
        {quotes.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center gap-5 ">
                <div>
                  <img
                    src={item.img}
                    className="max-w-xs rounded-lg cursor-pointer filter grayscale"
                    alt={item.img}
                  />
                </div>
                <div className="max-w-xs md:px-0">
                  <h1 className="text-[#8ca1b3]  font-semibold leading-7">
                    {item.quote}
                  </h1>
                </div>
              </div>
              {/* </div> */}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

{
  /* <Slider {...settings} className=" w-[100vw] lg:w-[60vw] mx-auto my-12">
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
        <div className="max-w-xs">
          <h1 className="text-[#8ca1b3] md:text-xl font-semibold leading-9">
            {item.quote}
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
})}
</Slider> */
}
