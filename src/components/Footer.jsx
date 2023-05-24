const Footer = () => {
  return (
    <div className="md:py-6 md:pb-0">
      <footer className="relative  bg-[#CAEE7D]  pt-8 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4  space-y-6 text-black">
              <h4 className="text-4xl font-semibold text-gray-700 ">
                Lets keep in touch
              </h4>
              <img
                className="w-[200px] mt-2"
                src="https://i.ibb.co/pr6nQzZ/final-logo.png"
                alt="final-logo"
                border="0"
              />
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-black text-sm font-semibold mb-2">
                    More
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-500  hover:text-Gray-200 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Our Bootcamp
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Meet Your Mentor
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-black text-sm font-semibold mb-2">
                    Mentorship Options
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-500 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Health
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Career
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Learning
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase  text-black text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-500 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Contact Us
                      </a>
                    </li>
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
                  mentorrnow
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
