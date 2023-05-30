import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Carddata from "./Data";


const NavBar = ({Scrolltoref}) => {
  const [toggle, setToggle] = useState(false);

  const [dropdown, setdropdown] = useState(false);

  const [more, setMore] = useState(false);


  return (
    <nav className="fixed w-screen bg-white text-[#8ca1b3] z-50 md:px-8">
      <div className="flex justify-between items-center px-9 py-3.5 gap-4">
        <div>
          <Link
            to="/"
            className="flex"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
           <p className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold text-xl">mentorthrive</p>
          </Link>
        </div>
        <div className=" hidden lg:flex items-center ">
          <ul className="list-none flex flex-row  items-center md:text-sm font-semibold space-x-6  mr-6">

           {/* dropdown web..... */}
           <div className="flex flex-col">
            <li onClick={() => {
              setdropdown(!dropdown)
            }} className="cursor-pointer   transition ease-in-out duration-300">
              Mentorship-Options 
            </li>


            {/* options....... */}
            <div className={`${dropdown ? 'block' : 'hidden'} absolute bg-white shadow-md p-4 mt-8 rounded-lg`}>
            <ul className=" font-normal grid grid-cols-3 gap-3">
              {Carddata.map((item,index) => {
                return (
               
                  <li className="cursor-pointer   transition ease-in-out duration-300" key={index}> <Link
                key={index}
                to={`/${item.Title}`}
                state={{
                  Tittle: item.Title,
              Background: item.Background,
              Blog: item.Blog,
                }
                }
                >{item.Title}</Link></li>
                  
                  )
              })}
            </ul>
            </div>
            </div>

            <li className="cursor-pointer   transition ease-in-out duration-300">
              How it works
            </li>

          {/* More...... */}
             <div>
             <li onClick={() => {
              setMore(!more)
            }} className="cursor-pointer   transition ease-in-out duration-300">
              More 
            </li>

             <div className={`${more ? 'block' : 'hidden'} absolute bg-white shadow-md p-2 mt-3 rounded-lg`}> 
            <ul className="font-normal  grid grid-cols-2 gap-3">
              <li className="cursor-pointer  transition ease-in-out duration-300">
              <Link to="/about"> About us </Link>
              </li>
              <li>Contact us</li>
              <li>Become a Mentor</li>
              <li>Testimonials</li>
              </ul>
            
            </div>
            </div>
            <li onClick={Scrolltoref} className="cursor-pointer  transition ease-in-out duration-300">
              Join as Mentor
            </li>
          </ul>
          <Button />
        </div>

        {/* Mobile navbar ...... */}
        <div className="flex lg:hidden justify-end items-center">
          <button onClick={() => setToggle(!toggle)}>
            <MenuIcon color="#00b8b3" />
          </button>

          {/* mobile menu...... */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6  bg-white shadow-2xl rounded-xl absolute top-5  items-center justify-center mt-10 `}
          >
            <ul className="list-none flex lg:hidden flex-col  gap-4 ">
              <li className="cursor-pointer   transition ease-in-out duration-300  ">
                Mentorship
              </li>
              <li className="cursor-pointer   transition ease-in-out duration-300 ">
                How it works
              </li>

              <li className="cursor-pointer    transition ease-in-out duration-300 ">
                Assessment
              </li>

              <li
                onClick={() => {
                  setdropdown(!dropdown);
                }}
                className="flex items-center cursor-pointer   space-x-1"
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
                  <p value="cursor-pointer   transition ease-in-out duration-300">
                    About Us
                  </p>
                </Link>
                <p onClick={Scrolltoref} value="cursor-pointer   transition ease-in-out duration-300">
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
