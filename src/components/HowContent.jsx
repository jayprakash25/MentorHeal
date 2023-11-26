import path from "../assets/images/path.png";
import booking from "../assets/images/booking.jpg";
import meet from "../assets/images/meet.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Card } from "./Card";
import { chose, Find, Schedule, Set } from "../assets/How";

const FAQs = ({ Q, children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className=" bg-[#F5F5F5] w-[20rem] md:w-[30rem] lg:w-[42rem]  px-4 py-5 md:px-8 md:py-8 space-y-4 rounded-2xl">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}
      >
        <h1 className=" md:text-xl lg:text-2xl font-semibold">{Q}</h1>
        <p>{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}</p>
      </div>
      <div
        style={{
          maxHeight: open ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 2s ease-in-out",
        }}
      >
        {open && <p className="font-semibold">{children}</p>}
      </div>
    </div>
  );
};

const HowContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const data = [
    {
      Q: "How do I choose the right mentor for me?",
      Ans: " When choosing a mentor, explore their profiles to find someone who aligns with your goals, values, and experiences. Consider their expertise, background, and areas of specialisation to ensure a good fit for your personal growth journey. ",
    },
    {
      Q: "How often should I schedule 1-on-1 video sessions with my mentor?",
      Ans: "The frequency of sessions depends on your needs and preferences. It is common to schedule sessions weekly, biweekly, or monthly. Discuss with your mentor to determine a schedule that works best for both of you. ",
    },
    {
      Q: " What can I expect during a mentoring session?",
      Ans: "Mentoring sessions provide a safe and supportive space for open conversations. You can discuss your challenges, aspirations, and desired outcomes. Your mentor will actively listen, provide guidance, and share insights to help you on your personal growth journey.",
    },
    {
      Q: "How long does it take to see results from mentorship?",
      Ans: "The timeline for results varies for each individual and depends on factors such as the nature of your goals, your commitment to implementing guidance, and the complexity of your challenges. Remember that personal growth is a continuous process, and progress may be gradual but transformative.",
    },
  ];

  return (
    <div className="pt-24 px-5 md:p-8 ">
      <h1 className="text-3xl lg:text-5xl  text-center pb-14 font-semibold">
        How it Works?
      </h1>
      <p className="text-justify font-medium lg:text-xl">
        Unlock your full potential with our easy 4-step process. We&apos;ve
        streamlined every aspect of your journey, ensuring a seamless experience
        from start to finish. Our platform is your gateway to personal growth
        and achievement, where you&apos;ll connect with experienced mentors who
        are passionate about helping you reach your goals.
      </p>
      <div className="space-y-6 pt-6 lg:pt-10">
        <div className="flex flex-col md:flex-row items-center space-y-4 lg:space-y-0 md:justify-between">
          <img src={Set} className="w-[16rem] lg:w-[24rem]" />
          <div className="py-2 space-y-2">
            <h1 className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold text-2xl lg:text-3xl ">
              1. Get Started: Set Up Your Account
            </h1>
            <p className="max-w-sm text-[#7C7C7C]  text-[16.5px] lg:text-[20px] leading-5 font-semibold md:leading-7 lg:leading-8 md:max-w-md">
              Unlock the door to your journey with just a few clicks.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row-reverse space-y-4 lg:space-y-0  md:justify-around">
          <img src={chose} className="w-[16rem]" />
          <div className="py-2 space-y-2">
            <h1 className=" text-2xl bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold  lg:text-3xl">
              2. Explore and Discover: Chose a category
            </h1>
            <p className="max-w-sm  text-[#7C7C7C] text-[13px] md:text-[16.5px] lg:text-[20px] leading-5 md:leading-7 lg:leading-8 md:max-w-md">
              Dive into a world of possibilities by selecting your area of
              mentorship.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-around">
          <img src={meet} className="max-w-sm md:max-w-md" />
          <div className="py-2 space-y-2">
            <h1 className=" bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold  text-2xl text-[#00b8b3] lg:text-3xl">
              3. Meet Your Guide: Find The Right Mentor
            </h1>
            <p className="max-w-sm  text-[#7C7C7C] text-[13px] md:text-[16.5px] lg:text-[20px] leading-5 md:leading-7 lg:leading-8 md:max-w-md">
              Connect with experienced mentors which you feel right for you
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row-reverse md:justify-around">
          <img src={booking} className="max-w-sm md:max-w-md" />
          <div className="py-2 space-y-2">
            <h1 className=" text-2xl bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold  lg:text-3xl">
              4. Book Your Path: Schedule A Call
            </h1>
            <p className="max-w-sm  text-[#7C7C7C] text-[13px] md:text-[16.5px] lg:text-[20px] leading-5 md:leading-7 lg:leading-8 md:max-w-md">
              Take the next step towards success by scheduling your first
              empowering conversation.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 pt-12">
        <h1 className="text-3xl lg:text-5xl text-center">
          Explore by{" "}
          <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-semibold  ">
            Categories
          </span>
        </h1>
      </div>
      <Card />

      <div className="py-8 pb-0">
        <h1 className=" bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-poppins  text-center text-xl md:text-2xl lg:text-3xl pb-5">
          FAQ&apos;s
        </h1>

        <div className="flex flex-row-reverse items-center justify-around">
          <div>
            {data.map((item, index) => {
              return (
                <div key={index} className="py-4">
                  <FAQs key={index} Q={item.Q}>
                    <p className="text-[#7c7c7c] max-w-2xl text-sm md:text-md lg:text-lg">
                      {item.Ans}
                    </p>
                  </FAQs>
                </div>
              );
            })}
          </div>
          {/* <img className="hidden lg:block max-w-lg" src={faq} alt="img" /> */}
        </div>
      </div>
    </div>
  );
};

export default HowContent;
