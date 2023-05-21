import React from 'react'
import heromobile from "../assets/images/Heromobile.png"
import heroweb from "../assets/images/Heroweb.png"
import ourmission from "../assets/images/ourmission.png"

const AboutUs = () => {
  return (
    <section>

    {/* Herosection........ */}
      <div className='bg-[#F3F7F5] mx-8  flex flex-col items-center rounded-3xl '>
      <h1 className='font-poppins text-[29px] md:text-[43px] lg:text-[56px] leading-9 md:leading-[55px] lg:leading-[70px] lg:w-[573px] text-center pt-16'>We're changing the whole game.</h1>
      <div className='font-poppins flex gap-4 my-5 text-[11px]  items-center'>
        <button className='bg-black outline-double outline-1 text-white rounded-3xl px-6 py-3  transition duration-300 ease-in-out hover:bg-white hover:text-black'>Get Started</button>
        <button className='bg-white outline-double outline-1 rounded-3xl px-6 py-3 transition duration-300 ease-in-out hover:bg-black hover:text-white'>View Pricing</button>
      </div>
      <img className='md:hidden' src={heromobile}/>
      <img className='hidden md:flex ' src={heroweb}/>
      </div>


    {/* our story...... */}
    
    <div className='m-8 grid grid-cols-1 md:grid-cols-2 items-center lg:gap-56'>
      <div className='grid grid-cols-1   gap-8 md:gap-32'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-inter text-[#A5D570]'>OUR STORY</h1>
        <p className='font-inter text-[22px] leading-[26px] w-[324px] '>We’re building the economic infrastructure for the internet. Businesses of every size.</p>
        </div>
        <div className='flex gap-6 items-center  '>
          <img src='https://i.ibb.co/C9Rh7t7/Capture.png'/>
          <p className='w-[275px] text-[#7C7C7C]  text-[14px] leading-5 font-semibold'>A living place for curiosity and collaboration, meeting and meaning. The heart of creative community</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 mt-12 md:mt-0'>

      <div className='flex flex-col gap-2'> 
        <h1 className='font-semibold text-[20px] leading-6'>1. 6 years of intense research</h1>
        <p className='text-[15px] leading-5 w-[325px] lg:w-[480px] text-[#7c7c7c]'>Our founders had a solution, This is your Email marketing specialist, newsletter service and campaign manager, all rolled into one.</p>
        </div>
        <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-[20px] leading-6'>2. Audience segmentation</h1>
        <p className='text-[15px] leading-5 w-[325px] lg:w-[480px] text-[#7C7C7C]'>Improve audience engagement by segmenting. Boost you conversions by targeting subsets from you contacts. Give them content they need.</p>
        </div>
        <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-[20px] leading-6'>3. Contact monitoring</h1>
        <p className='text-[15px] leading-5 w-[325px] lg:w-[480px] text-[#7C7C7C]'>Just import your contact list, segment your contacts and we’ll get you a detailed real-time report of their activity.</p>
        </div>

      </div>
    </div>

{/* Our mission section..... */}
    <div className='flex flex-col-reverse md:flex-row m-8 md:justify-between '>
      <div className='mt-4'>
        <h1 className='font-bold text-[44px] md:text-[54px] lg:text-[64px]'>Our Mission</h1>
        <p className='text-[#7C7C7C] font-medium leading-6 text-[13px] md:text-[16.5px] lg:text-[20px] md:leading-9 w-80 lg:w-[625px]'>We’re building the economic infrastructure for the 
internet. Businesses of every size, be it new startups or public companies, use our software to accept payments and manage their businesses online.</p>
    <div className='flex justify-between mt-2'>
    <div className='flex flex-col'>
      <h1 className='font-bold text-[34px] w-[79px] md:text-[43px] lg:text-[52px] '>94%</h1>
<p className='text-[8px] font-semibold md:text-[10px] lg:text-[13px]'>CLIENT RETENTION</p>
</div>

<div className='flex flex-col'>
<h1 className='font-bold text-[34px] w-[79px] md:text-[43px] lg:text-[52px]'>70M+</h1>
<p className='text-[8px] font-semibold md:text-[10px] lg:text-[13px]'>EMAILS PER MONTH</p>
</div>

<div className='flex flex-col'>
<h1 className='font-bold text-[34px] w-[79px] md:text-[43px] lg:text-[52px]'>10K+</h1>
<p className='text-[8px] font-semibold md:text-[10px] lg:text-[13px]'>MONTHLY CAMPAIGNS</p>
</div>

    </div>

      </div>
      <img src={ourmission} className=' md:w-[463px] md:h-auto ' />
    </div>
    </section>

  )
}

export default AboutUs





