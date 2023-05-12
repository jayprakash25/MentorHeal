import React from 'react'
import Hero from '../assets/images/hero.png'
const HeroSection = () => {
  return (
    <div className='p-16'>
        <div className='bg-green-50 rounded-lg   p-3'>
            <div>
                <div className='flex'>
                    <div className='pl-16'>
                        {/* 55% */}
                        <h1 className='text-7xl w-[95%] font-bold  '>Mentorship can help you  embrace your potential!</h1>
                        <p className='w-[75%] py-8 text-xl'>We all are already abundant. We just need a mentor to help us realise it.</p>
                       <button className='outline-double outline-1 py-2 px-8 rounded-full font-semibold bg-black text-white hover:bg-gray-950 hover:text-white'>Get Started</button>
                    </div>
                    <img className=' mr-24 h-[500px] w-[400px] -mt-8'src={Hero}/>
                </div>

            </div>
        </div>
    </div>
  ) 
}

export default HeroSection