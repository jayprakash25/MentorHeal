import React from 'react'
import heromobile from "../assets/images/Heromobile.png"
import heroweb from "../assets/images/Heroweb.png"

const AboutUs = () => {
  return (
    <>
    <div class=" mx-6  bg-green-50 rounded-lg sm:p-8 sm:mx-20 flex justify-center items-center ">
  <div class=" mt-3  ">
    
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
<div className='text-green-700 font-extrabold py-10 px-9 text-2xl'>OUR STORY</div>
<div className='text-2xl font-bold px-9 -mt-6 w-[450px]'>We’re building the economic infrastructure for the internet. Businesses of every size .</div>
<div className=' flex mt-3 px-7'>
  <img  className='w-80 'src="https://i.ibb.co/C9Rh7t7/Capture.png" alt="" />
  <p className=' font-light text-gray-600 ml-2 my-4 w-[1000px]'>A living place for curiosity and collaboration, meeting and meaning. The heart of creative community</p>
</div>
<h1 className='font-bold text-xl py-9 ml-9 '>1. 6 years of intense research</h1>
<p className=' font-light text-gray-600 -mt-7 px-9 ml-4 w-[450px] '>Our founders had a solution, This is your Email marketing specialist, newsletter service and campaign manager, all rolled into one.</p>

<h1 className='font-bold text-xl py-9 ml-9 '>2. Audience segmentation</h1>
<p className=' font-light text-gray-600 -mt-7 px-9 ml-4 w-[450px] '>Improve audience engagement by segmenting. Boost you conversions by targeting subsets from you contacts. Give them content they need.</p>

<h1 className='font-bold text-xl py-9 ml-9 '>3. Contact monitoring</h1>
<p className=' font-light text-gray-600 -mt-7 px-9 ml-4 w-[450px] '>Just import your contact list, segment your contacts and we’ll get you a detailed real-time report of their activity.</p>


</>

  )
}

export default AboutUs