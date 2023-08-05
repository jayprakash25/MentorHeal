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
        " Success is not the absence of struggle, but rather the relentless pursuit of overcoming it. - Elon Musk",
    },
    {
      id: 2,
      img: "https://media.wired.com/photos/5c377ecde1c834084b57a611/4:3/w_2396,h_1797,c_limit/Culture_Monitor_Bezos.jpg",
      quote:
        "Choosing to work hard is the key to being successful - Jeff Bezos",
    },
    {
      id: 3,
      img: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/stkagurhbfcwasjeiijl.jpg",
      quote:
        " We will make it because we are young and we will never, never give up. - Jack Ma",
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
      <div className="flex flex-col items-center my-24 px-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold py-4">
            Even the most{" "}
            <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">
              Successful{" "}
            </span>
            struggle.
          </h1>
        </div>
      </div>
      <Slider {...settings} className=" w-[80vw] mx-auto my-12">
        {quotes.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex lg:flex-row flex-col gap-12 items-center  justify-evenly  p-6 rounded ">
                <div className="text-center">
                  <h1 className="text-[#8ca1b3] md:text-xl  font-semibold leading-8">
                    {item.quote}
                  </h1>
                </div>
                <div>
                  <img
                    src={item.img}
                    className="max-w-xs md:max-w-md rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </Slider>
    </>
  );
}
