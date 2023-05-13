import React from 'react'
import heromobile from "../assets/images/Heromobile.png"
import heroweb from "../assets/images/Heroweb.png"

const AboutUs = () => {
  return (
    <>
    <div class=" mx-6  bg-green-50 rounded-lg sm:p-8 sm:mx-20 flex justify-center items-center ">
  <div class=" mt-3  ">
    <h1>Hello HAPPY NEWYEAR</h1>
    <h1 class="text-4xl p-2  font-bold sm:text-7xl text-center sm:w-[700px]">We're changing the whole game.</h1>
    <div className='px-1 py-5  sm:ml-32 sm:mt-3 flex'>
      <button className=' ml-6 outline-double outline-1 bg-black text-white py-2 px-6 rounded-full font-bold transition duration-300 ease-in-out hover:bg-white hover:text-black sm:w-44 sm:h-14'>Get Started</button>
      <button className='ml-4 outline-double outline-1 py-2 px-6 rounded-full font-bold transition duration-300 ease-in-out hover:bg-black hover:text-white sm:w-44 sm:h-14'>View Pricing</button>
    </div>
     {/* Desktop view */}
     <img className="hidden sm:block bg-Image-lg  ml-16 mt-8 " src={heroweb} alt="Hero Image for desktop view"/>
    {/* Mobile view */}
    <img className="block sm:hidden   -mt-10 " src={heromobile} alt="Hero Image for mobile view"/>
  </div>
</div>
<div>
  <div>

  </div>
</div>
</>

  )
}

export default AboutUs