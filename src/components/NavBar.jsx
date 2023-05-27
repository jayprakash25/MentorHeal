import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavBar = ({Scrolltoref}) => {
  const [toggle, setToggle] = useState(false);

  const [dropdown, setdropdown] = useState(false);

  return (
    <nav className="fixed w-screen bg-white z-50">
      <div className="flex justify-between items-center px-9 py-3.5 gap-4">
        <div>
          <Link
            to="/"
            className="flex"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              className="w-[200px] mt-2"
              src="https://i.ibb.co/pr6nQzZ/final-logo.png"
              alt="final-logo"
              border="0"
            />
          </Link>
        </div>
        <div className=" hidden lg:flex items-center ">
          <ul className="list-none flex flex-row  items-center md:text-sm font-semibold space-x-4 mr-6">
            <li className="cursor-pointer hover:text-[#E27066]  transition ease-in-out duration-300">
              Mentorship-Options
            </li>
            <li className="cursor-pointer hover:text-[#E27066]  transition ease-in-out duration-300">
              How it works
            </li>

            <Link to="/about">
              <li className="cursor-pointer hover:text-[#E27066] transition ease-in-out duration-300">
                About us
              </li>
            </Link>

            <li onClick={Scrolltoref} className="cursor-pointer hover:text-[#E27066] transition ease-in-out duration-300">
              Join as Mentor
            </li>
          </ul>
          <Button />
        </div>

        {/* Mobile navbar ...... */}
        <div className="flex lg:hidden justify-end items-center">
          <button onClick={() => setToggle(!toggle)}>
            <MenuIcon />
          </button>

          {/* mobile menu...... */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6  bg-white shadow-2xl rounded-xl absolute top-5  items-center justify-center mt-10 `}
          >
            <ul className="list-none flex lg:hidden flex-col  gap-4 ">
              <li className="cursor-pointer hover:text-[#E27066]  transition ease-in-out duration-300  ">
                Mentorship
              </li>
              <li className="cursor-pointer hover:text-[#E27066]  transition ease-in-out duration-300 ">
                How it works
              </li>

              <li className="cursor-pointer hover:text-[#E27066]   transition ease-in-out duration-300 ">
                Assessment
              </li>

              <li
                onClick={() => {
                  setdropdown(!dropdown);
                }}
                className="flex items-center cursor-pointer hover:text-[#E27066]  space-x-1"
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
                  <p value="cursor-pointer hover:text-[#E27066]  transition ease-in-out duration-300">
                    About Us
                  </p>
                </Link>
                <p onClick={Scrolltoref} value="cursor-pointer hover:text-[#E27066]  transition ease-in-out duration-300">
                  Join As a Mentor
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
