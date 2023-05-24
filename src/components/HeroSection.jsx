import Button from './Button';
import Hero from '../assets/images/Hero.png'
import {data} from '../utils/data'


const HeroSection = () => {
    return (
        <div>
          <section className='m-8 '>
<div className='w-full  bg-[#F3F7F5]   rounded-3xl flex flex-col justify-between'>
<div className='grid grid-cols-1  gap-6 md:gap-24 md:grid-cols-2 max-w-[1240px] m-auto'>

<div className='flex flex-col justify-center  md:items-start md:ml-16 w-full '>
  <h1 className='mt-11 md:mt-0 md:mb-8  lg:max-w-[605px] lg:text-6xl lg:leading-[69px] md:text-4xl md:tracking-wide md:max-w-md font-bold text-2xl  max-w-[300px]'>{data?.content?.home[1]?.Mainhead}</h1>
  <p className='py-2 mb-4 max-w-[300px]'>{data?.content?.home[1]?.Maindesc}</p>
  <Button/>
</div>

<div className=''>
  <img className=' h-80 w-55%   object-contain md:h-[550px] ml-auto' src={Hero} alt='hero.png' />
</div>


</div>
</div>
</section>
        </div>
    )
}

export default HeroSection