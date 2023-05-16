import React from 'react';
import Button from './Button';
import Tagline from './tagline';
import Hero from '../assets/images/Hero.png'


const HeroSection = () => {
  return (
    <section className='m-8'>
<div className='w-full  bg-[#F3F7F5]   rounded-3xl flex flex-col justify-between'>
<div className='grid grid-cols-1  gap-6 md:gap-24 md:grid-cols-2 max-w-[1240px] m-auto'>

<div className='flex flex-col justify-center  md:items-start md:ml-16 w-full '>
  <h1 className='mt-11 md:mt-0 md:mb-8 lg:tracking-wider lg:text-5xl md:text-4xl md:tracking-wide md:max-w-md font-bold text-2xl  max-w-[300px]'>Mentorship can help you  embrace your potential! </h1>
  <p className='py-2 mb-4 max-w-[300px]'>We all are already abundant. We just need a mentor to help us realise it.</p>
  <Button/>
</div>
<div className=''>
  <img className=' h-80 w-55%   object-contain md:h-[550px] ml-auto' src={Hero} alt='hero.png' />
</div>


</div>
</div>

</section>



  ) 
}

export default HeroSection





