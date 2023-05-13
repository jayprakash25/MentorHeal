import React from 'react'
import Hero from '../assets/images/hero.png'
const HeroSection = () => {
  return (
    <div className=' p-8 sm:p-16 '>
        <div className='   bg-green-50 rounded-lg  flex justify-center items-center '>
            <div>
                <div className='flex'>
                    <div className='   py-5 p-4 sm:ml-12'>
                        {/* 55% */}
                        {/* text-7xl w-[95%] font-bold */}
                        <h1 className=' text-3xl font-bold w-80 sm:text-7xl sm:w-[75%]  '>Mentorship can help you  embrace your potential!</h1>
                        <p className=' w-[75%]  py-4 text-base sm:w-[45%] sm:py-8 sm:text-xl'>We all are already abundant. We just need a mentor to help us realise it.</p>
        <button className='outline-double outline-1 py-3 px-10 rounded-full font-semibold bg-black text-white hover:bg-gray-950 hover:text-white'>Get Started</button>
      </div>
      <img className=' mt-80 w-80 h-80 -ml-96  sm:-mt-9 sm:mr-16 sm:h-[500px]  sm:w-[400px] object-cover rounded-lg lg:rounded-r-lg' src={Hero} alt='hero'/>
    </div>
    
  </div>
</div>
</div>

  ) 
}

export default HeroSection