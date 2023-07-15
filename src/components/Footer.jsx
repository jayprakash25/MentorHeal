import { Link } from "react-router-dom";
import Carddata from "./Data";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";
const Footer = ({ Scrolltoref }) => {
  return (
    <div className="">
      <footer className="relative  bg-[#007384] text-center py-8 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4 text-center  space-y-10 text-black">
              <Link
                to="/"
                className="flex"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold text-3xl mx-auto mb-5 md:text-4xl">
                  MentorHeal
                </p>
              </Link>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-white text-sm font-semibold mb-2">
                    More
                  </span>
                  <ul className="text-[#dde5f1] list-unstyled space-y-4 my-6 cursor-pointer">
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-white text-sm font-semibold mb-2">
                    Mentorship Options
                  </span>
                  <ul className="text-[#dde5f1] list-unstyled  space-y-4 my-6 cursor-pointer">
                    {Carddata.map((item, index) => {
                      return (
                        <li className="cursor-pointer" key={index}>
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
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase  text-white text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="text-[#dde5f1] list-unstyled space-y-4 my-6 cursor-pointer">
                    {/* <li>Support</li>
                    <li>Terms &amp; Conditions</li>
                    <li>Privacy Policy</li> */}
                    <li onClick={Scrolltoref}>Contact Us </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* social icons .... */}
          <div className="flex space-x-4 items-center justify-center cursor-pointer">
            <a href="https://www.linkedin.com/company/mentoheal/">
              <LinkedInIcon color="" fontSize="large" />
            </a>
            <a href="https://instagram.com/mentorheal.forlife?igshid=MzRlODBiNWFlZA==">
              <Instagram fontSize="large" />
            </a>
            <TwitterIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
          </div>

          <hr className="my-6 bg-black" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm  text-black font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
                <a href="/" className=" ">
                  {" "}
                  MentorHeal
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 bg-black" />

          <div className="text-[#dde5f1] bg-[#42909d] py-5 px-5 lg:px-20 mx-10 lg:mx-20 rounded-lg font-semibold text-sm lg:leading-10 text-center ">
            <p>
              Disclaimer: We are diligently refining our prototype services, eagerly preparing for the highly anticipated launch announcement. Stay tuned for exciting updates as we shape the future of our industry!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
