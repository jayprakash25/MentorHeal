import Footer from "./Footer";
import NavBar from "./NavBar";
import mentor from "../assets/images/mentor.jpg";
import pro from "../assets/images/pro.png";
import pro2 from "../assets/images/pro2.png";
import pro4 from "../assets/images/pro4.png";
import pro5 from "../assets/images/pro5.png";
import pro6 from "../assets/images/pro6.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";
import Appointment from "./Appointment";
import Whatsup from "./Whatsup";
import { JoinMentor } from "../features";

const data = [
  {
    image: pro,
    title: "Choose how you want to mentor",
    line: "Set your own schedule, choose what types of mentees  you want to work with, and get paid for your time.",
  },
  {
    image: pro2,
    title: "We’ll handle the details, you focus on mentoring",
    line: "We’ll connect you with mentees , manage the scheduling process, and deal with the boring stuff, so you can focus on mentoring!",
  },
  // {
  //   image: pro3,
  //   title: "No curriculum or tasks",
  //   line: "There’s no structured curriculum at MentorHeal, so you don’t have to keep up with courses or complete cookie-cutter tasks.",
  // },
  {
    image: pro4,
    title: "Flexibility to mentor how you want",
    line: "As a MentorHeal mentor, you’re free to teach in your own style and customize your approach based on your mentees ’ goals.",
  },
  {
    image: pro5,
    title: "Structure to make mentoring easy",
    line: "We provide shared workspaces, frameworks, and projects that you and your mentees  can use (but only if you want to).",
  },
  {
    image: pro6,
    title: "An amazing mentor community",
    line: "You’ll be part of or private mentor community where you can connect with other mentors to share resources and mentoring tips.",
  },
];

const Mentor = () => {
  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <div>
      <NavBar />

      <div
        className="flex flex-col items-center p-8 pt-24 space-y-8 text-center md:flex-row md:justify-around "
      >
        <div >
          <img
            src={mentor}
            className="max-w-sm md:max-w-md lg:max-w-lg"
            alt=""
          />
        </div>
        <div  className="md:max-w-lg">
          <div className="space-y-4">
            <h1 className="text-2xl">
              Join our <span className=" text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">community</span> of world-class mentors
            </h1>
            <p className="text-[#8ca1b3]">
              As a MentorHeal mentor, you’ll get to provide mentorship to
              mentees  in your own style and on your own schedule (and get paid
              for it!).
            </p>
          </div>
          <div className="flex my-8">
            <div className="space-y-2.5">
              <h1 className="text-xl ">Learn</h1>
              <p className="text-[#8ca1b3]">
                Route among the safe roads. Find whats waiting for you.
              </p>
            </div>

            <div className="space-y-2.5">
              <h1 className="text-xl ">Share</h1>
              <p className="text-[#8ca1b3]">
                Your caring gets its way. Let your people know.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 my-4 text-center space-y-14">
        <div >
          <h1 className="text-2xl lg:text-3xl">
            Here’s why mentor's around the world love <span className=" text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">mentoring</span> on MentorHeal
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center px-8 space-y-2.5"
              >
                <div className="mx-auto">
                  <img
                    src={item.image}
                    className="w-16 h-16 "
                  />
                </div>
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-[#8ca1b3]">{item.line}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-20">
      <JoinMentor/>
      </div>
      <Appointment />
      <Whatsup />
      <Footer />
    </div>
  );
};

export default Mentor;
