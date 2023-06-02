import { Link } from "react-router-dom";
import Carddata from "./Data";


const Footer = () => {
  return (
    <div className="">
      <footer className="relative  bg-[#212240]  pt-8 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4  space-y-10 text-black">
            <Link
            to="/"
            className="flex"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
           <p className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold text-xl">mentorthrive</p>
          </Link>
              {/* <img
                className="w-[200px] mt-2"
                src="https://i.ibb.co/pr6nQzZ/final-logo.png"
                alt="final-logo"
                border="0"
              /> */}
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-white text-sm font-semibold mb-2">
                    More
                  </span>
                  <ul className="text-[#949494] list-unstyled space-y-4 my-6 cursor-pointer">
                    <li>About Us</li>
                   
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-white text-sm font-semibold mb-2">
                    Mentorship Options
                  </span>
                  <ul className="text-[#949494] list-unstyled  space-y-4 my-6 cursor-pointer">


                  {Carddata.map((item, index) => {
                    return (
                      <li
                        className="cursor-pointer"
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





                    {/* <li>Health</li>
                    <li>Career</li>
                    <li>Learning</li>
                    <li>Skills</li>
                    <li>Decisions</li>
                    <li>Relationships</li>
                    <li>Entrepreneurship</li>
                    <li>Financial Literacy</li>
                    <li>Spirituality</li> */}
                  </ul>
               </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase  text-white text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="text-[#949494] list-unstyled space-y-4 my-6 cursor-pointer">
                    <li>Support</li>
                    <li>Terms &amp; Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                  </ul>
               </div>
              </div>
            </div>
          </div>
          <hr className="my-6 bg-black  " />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm  text-black font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
                <a href="/" className=" ">
                  {" "}
                  mentorthrive
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
