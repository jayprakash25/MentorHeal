import React from 'react';
import Button from './Button';
const HeroSection = () => {
  return (
<section className='  h-screen w-full relative top-[112px]  z-[-1]  '>
<div className='flex justify-center '>
  <div className=' lg:flex  bg-[#F3F7F5]  w-[85%] md:w-[700px] lg:w-[1169px]  h-screen  rounded-xl md:rounded-[70px]'>
    
    <div className='mt-[54px] lg:mt-[73px] lg:ml-[88px] ml-[18px] mr-[43px] '>
      <h1 className='text-3xl lg:text-6xl  font-bold w-72 md:w-[605px] '>Mentorship can help you  embrace your potential!</h1>
      <div className='text-[16px] font-normal mt-[17px] lg:mt-[27px] w-[299px] mb-[16px] lg:mb-[27px] md:py-5 lg:p-0 '>
      <p className=''>We all are already abundant. We just </p>
      <p>need a mentor to help us </p>
      <p> realise it.</p>
      </div>
      <div className='py-8'>
        <Button/>
      </div>
      </div>
      <div className=' lg:static  md:left-80 md:bottom-40 w-56 md:w-60 lg:w-auto lg:py-24 relative left-28 bottom-8 '>
      <img className='h-[220px] md:h-[310px] lg:h-[470px]  ' src='https://imgtr.ee/images/2023/05/13/lin9V.png' alt='hero.png'/>
    </div>

    

  </div>
  </div>
</section>    

  ) 
}

export default HeroSection






