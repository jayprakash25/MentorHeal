import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Carddata from "./Data";
import { useEffect } from "react";
import { JoinMentor } from "../features/index";
const NavBar = ({ Scrolltoref, Scrolltotestimonial }) => {
  // state handlers
  const mentorjwt = localStorage.getItem("mentorjwt");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const [more, setMore] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [joinmentor, setjoinmentor] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-screen bg-white text-[#8ca1b3] z-50 md:px-8 ${
          scroll ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="flex justify-between items-center px-9 py-3.5 gap-4">
          <div>
            <Link
              to="/"
              className="flex"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <p className="text-2xl font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text md:text-3xl">
                MentorHeal
              </p>
              {/* <img src={Logo} className="w-16 h-16" alt="" /> */}
            </Link>
          </div>
          <div className="items-center hidden lg:flex">
            <ul className="flex flex-row items-center mr-6 space-x-6 font-semibold list-none md:text-sm">
              {/* dropdown web..... */}
              <div className="flex flex-col">
                <li
                  onMouseEnter={() => setdropdown(!dropdown)}
                  className="cursor-pointer"
                >
                  Mentorship-Options
                </li>

                {/* options....... */}
                <div
                  onMouseEnter={() => setdropdown(true)}
                  onMouseLeave={() => setdropdown(false)}
                  className={`${
                    dropdown ? "block" : "hidden"
                  } absolute bg-white shadow-md p-4 mt-8 rounded-lg`}
                >
                  <ul className="grid grid-cols-3 gap-3 font-normal ">
                    {Carddata.map((item, index) => {
                      return (
                        <li
                          className="transition duration-300 ease-in-out cursor-pointer"
                          key={index}
                        >
                          {" "}
                          <Link
                            key={index}
                            to={`/${item.Title}`}
                            state={{
                              Tittle: item.Title,
                              Background: item.Background,
                              Blog: item.Blog,
                            }}
                          >
                            {item.Title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <li className="cursor-pointer">
                <Link to={"/how"}> How it works </Link>
              </li>

              {/* More...... */}
              <div>
                <li
                  onMouseEnter={() => {
                    setMore(!more);
                  }}
                  className="cursor-pointer"
                >
                  More
                </li>

                <div
                  onMouseEnter={() => setMore(true)}
                  onMouseLeave={() => setMore(false)}
                  className={`${
                    more ? "block" : "hidden"
                  } absolute bg-white shadow-md p-2 mt-3 rounded-lg`}
                >
                  <ul className="grid grid-cols-2 gap-3 p-3 font-normal">
                    <li className="cursor-pointer">
                      <Link to={"/Blog"}>Blog</Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link to="/about"> About us </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link to="/mentors"> Mentor </Link>
                    </li>

                    <li onClick={Scrolltoref} className="cursor-pointer">
                      Contact us
                    </li>

                    <li
                      className="cursor-pointer"
                      onClick={Scrolltotestimonial}
                    >
                      Testimonials
                    </li>
                  </ul>
                </div>
              </div>
              {user ? null : (
                <li className="px-5  text-white cursor-pointer bg-gradient-to-l from-cyan-400 via-cyan-400 to-cyan-300 py-1.5 rounded-full">
                  <Link to="/signup"> User Signup </Link>
                </li>
              )}
              {mentorjwt ? null : (
                <li
                  className="px-5  text-white cursor-pointer bg-gradient-to-l from-cyan-400 via-cyan-400 to-cyan-300 py-1.5 rounded-full"
                  onClick={() => {
                    setjoinmentor(true);
                  }}
                >
                  Join as Mentor
                </li>
              )}
            </ul>
            <Button />
          </div>

          {/* Mobile navbar ...... */}
          <div className="flex items-center justify-end lg:hidden">
            <button onClick={() => setToggle(!toggle)}>
              <MenuIcon color="#00b8b3" />
            </button>

            {/* mobile menu...... */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6  bg-white shadow-2xl rounded-xl absolute top-5  items-center justify-center mt-10 `}
            >
              <ul className="flex flex-col gap-4 list-none lg:hidden ">
                <li
                  onClick={() => {
                    setMore(!more);
                  }}
                  className="transition duration-300 ease-in-out cursor-pointer "
                >
                  Mentorship
                  <ArrowDropDownIcon />
                </li>
                {/* .........options........ */}
                <div
                  className={` space-y-4 text-sm ${more ? "block" : "hidden"}`}
                >
                  <ul className="grid gap-3 font-normal ">
                    {Carddata.map((item, index) => {
                      return (
                        <li
                          className="transition duration-300 ease-in-out cursor-pointer"
                          key={index}
                        >
                          {" "}
                          <Link
                            key={index}
                            to={`/${item.Title}`}
                            state={{
                              Tittle: item.Title,
                              Background: item.Background,
                              Blog: item.Blog,
                            }}
                          >
                            {item.Title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <li className="transition duration-300 ease-in-out cursor-pointer ">
                  <Link to={"/how"}>How it works</Link>
                </li>
                {mentorjwt ? (
                  ""
                ) : (
                  <li className="cursor-pointer">
                    <Link to="/signup"> Signup </Link>
                  </li>
                )}
                <li
                  onClick={() => {
                    setdropdown(!dropdown);
                  }}
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <h1>More</h1>
                  <ArrowDropDownIcon />
                </li>
                <div
                  className={` space-y-4 text-sm ${
                    dropdown ? "block" : "hidden"
                  }`}
                >
                  <Link to={"/about"}>
                    <p value="cursor-pointer transition ease-in-out duration-300">
                      About Us
                    </p>
                  </Link>
                  {user ? null : (
                    <li className="cursor-pointer">
                      <Link to="/signup"> User Signup </Link>
                    </li>
                  )}
                  {mentorjwt ? null : (
                    <p
                      onClick={() => {
                        setjoinmentor(true);
                      }}
                      value="cursor-pointer transition ease-in-out duration-300"
                    >
                      Join As a Mentor
                    </p>
                  )}
                  <p value="cursor-pointer transition ease-in-out duration-300">
                    <Link to={"/blog"}>Blog</Link>
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {joinmentor ? <JoinMentor setjoinmentor={setjoinmentor} /> : null}
    </>
  );
};

export default NavBar;
