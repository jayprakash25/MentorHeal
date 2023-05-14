import React from 'react';
import Button from './Button';
const HeroSection = () => {
  return (
<section className='  h-screen w-full relative top-[112px]  z-[-1]  '>
<div className='flex justify-center '>
  <div className='lg:flex  bg-[#F3F7F5]  w-[80%] md:w-[700px] lg:w-[1169px]  h-screen  rounded-xl md:rounded-[70px]'>
    
    <div className='mt-[54px] lg:mt-[73px] lg:ml-[88px] ml-[18px] mr-[43px] '>
      <h1 className='text-3xl lg:text-6xl  font-bold w-72 md:w-[605px] '>Mentorship can help you  embrace your potential!</h1>
      <div className='text-[16px] font-normal mt-[17px] lg:mt-[27px] w-[299px] mb-[16px] lg:mb-[27px] '>
      <p className=''>We all are already abundant. We just </p>
      <p>need a mentor to help us </p>
      <p> realise it.</p>
      </div>
      <Button/>
      </div>
      <div className='flex justify-center mt-[32px]  '>
      <img src='https://imgtr.ee/images/2023/05/13/lin9V.png' alt='hero.png'/>
    </div>

    

  </div>
  </div>
</section>    

  ) 
}

export default HeroSection






