const Footer = () => {
  return (
    <div className="md:py-6 md:pb-0">
      <footer className="relative  bg-[#f5f2fc]  pt-8 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4  space-y-10 text-black">
              <h4 className="text-4xl max-w-xl text-gray-800 font-semibold  ">
                Discover Your Purpose, Embrace
                <p className="my-3">Your Potential!</p>
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
                  <ul className="list-unstyled space-y-6 my-6">
                    <li>About Us</li>
                    <li>Our Bootcamp</li>
                    <li>Meet Your Mentor</li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-black text-sm font-semibold mb-2">
                    Mentorship Options
                  </span>
                  <ul className="list-unstyled  space-y-6 my-6">
                    <li>Health</li>
                    <li>Career</li>
                    <li>Learning</li>
                    <li>Skills</li>
                    <li>Decisions</li>
                    <li>Relationships</li>
                    <li>Entrepreneurship</li>
                    <li>Financial Literacy</li>
                    <li>Spirituality</li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase  text-black text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled space-y-6 my-6">
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
