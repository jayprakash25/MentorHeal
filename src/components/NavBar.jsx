import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="fixed w-screen bg-white ">
      <div className="flex  justify-between items-center px-9 py-3.5 gap-4">
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
          <ul className="list-none flex flex-row  md:text-sm font-semibold space-x-4 mr-6">
            <li className="cursor-pointer hover:text-zinc-600  transition ease-in-out duration-300">
              Mentorship-Options
            </li>
            <li className="cursor-pointer hover:text-zinc-600  transition ease-in-out duration-300">
              How it works
            </li>
            <Link to="/about">
              <li className="cursor-pointer hover:text-zinc-600  transition ease-in-out duration-300">
                About us
              </li>
            </Link>
            <li className="cursor-pointer hover:text-zinc-600  transition ease-in-out duration-300">
              Assessment
            </li>
            <li className="cursor-pointer hover:text-zinc-600  transition ease-in-out duration-300">
              Join as a Mentor
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
            } p-6  bg-[#F3F7F5] absolute top-5  items-center justify-center mt-10 `}
          >
            <ul className="list-none flex lg:hidden flex-col  gap-6 ">
              <li className="cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300  ">
                Mentorship
              </li>
              <li className="cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 ">
                How it works
              </li>
              <Link to="/about">
                <li className="cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 ">
                  About us
                </li>
              </Link>
              <li className="cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 ">
                Assessment
              </li>
              <li className="cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 ">
                Join as a Mentor
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
