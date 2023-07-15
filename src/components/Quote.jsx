import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    id: 1,
    img: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
    quote:
      '" Success is not the absence of struggle, but rather the relentless pursuit of overcoming it. Even after achieving great heights, the struggle persists, for it is the fuel that drives innovation and propels us towards a better tomorrow. Embrace the challenges, for they are the stepping stones on the path to extraordinary achievements. - Elon Musk"',
  },
  {
    id: 2,
    img: "https://media.wired.com/photos/5c377ecde1c834084b57a611/4:3/w_2396,h_1797,c_limit/Culture_Monitor_Bezos.jpg",
    quote:
      '" Choosing to work hard is the key to being successful - Jeff Bezos"',
  },
  {
    id: 3,
    img: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/stkagurhbfcwasjeiijl.jpg",
    quote:
      '" We will make it because we are young and we will never, never give up. - Jack Ma"',
  },
];

export default function Quote() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = quotes.length - 1; // Total number of slides

  const nextSlide = () => {
    if (currentSlide === numSlides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // const prevSlide = () => {
  //   if (currentSlide === 0) {
  //     setCurrentSlide(numSlides);
  //   } else {
  //     setCurrentSlide(currentSlide - 1);
  //   }
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center m-8">
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold py-4">
          Even the most {" "}
          <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">
            Successful {" "}
          </span>
          struggle.
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        key={currentSlide}
      >
        <div className="my-4">
          <div key={quotes[currentSlide]?.id} className="ma">
            <div className="flex flex-col md:flex-row justify-center items-center my-16 p-6 rounded shadow-md text-center space-x-4">
              <div className="md:max-w-2xl text-center p-3 md:p-0">
                <p className="text-[#8ca1b3] font-semibold leading-8">
                  {quotes[currentSlide]?.quote}
                </p>
              </div>
              <div>
                <img
                  className="max-w-xs md:max-w-sm lg:max-w-md rounded-xl"
                  src={quotes[currentSlide]?.img}
                  alt="pic"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
