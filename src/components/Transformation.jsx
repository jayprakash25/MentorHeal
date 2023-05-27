import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

const Transformation = () => {

const slides = [
    {
        story: 'Their approach to wellness is truly holistic, taking into account all aspects of my life including nutrition, exercise, stress management, and self-care. My mentor was incredibly knowledgeable and supportive, providing me with personalized guidance and practical tools to help me achieve my goals. With their help, I was able to make significant improvements in my overall well-being and feel more empowered to take charge of my health. I highly recommend this company to anyone looking for a comprehensive and transformative wellness experience.',
        name: 'RAJ SONI '
    },
    {
        story: 'I am amazed at the progress I have made. Their team of experts has helped me identify and overcome obstacles that were holding me back from achieving my full potential. Their approach to wellness is unique, combining evidence-based practices with a compassionate and supportive approach. They have helped me develop new habits and strategies for success that have improved my overall well-being and productivity. I am truly grateful for their support and highly recommend their services to anyone who is looking to live their best life.',
        name: 'RUDRA SINGH'   
    },
    {
        story: 'Their team is incredibly skilled, empathetic, and supportive, and they have helped me make significant improvements in my life. With their guidance, I have been able to overcome my limiting beliefs and tap into my full potential. Their approach to wellness is truly transformative, focusing on creating sustainable habits that promote overall well-being. I am grateful for their continued support and highly recommend their services to anyone who is looking to live their best life.',
        name: 'VISHAL VERMA'
    }
]

const [slide, setSlide] = useState(0);

const prevSlide = () => {
    const  isFirstSlide  = slide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : slide - 1;
    setSlide(newSlide); 
};

const nextSlide = () => {
    const isLastSlide = slide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : slide + 1;
    setSlide(newSlide);
}


    return (
        <section className='m-8 pb-10 '>

        <h1 className='font-semibold text-3xl md:text-5xl text-center my-20'>The Stories of <span className='text-[#E27066]'> transformation </span></h1>

        <div className=' flex  items-center '>
        <div className='flex flex-col items-center space-y-10'>
         <h1 className='w-[80%]  text-gray-600 md:text-lg text-center '>{slides[slide].story}</h1>
         <p className='font-semibold '>{slides[slide].name}</p>
         </div>
<div className=' absolute  left-10'>
        {/* Left Arrow...... */}
        <ArrowBackIosIcon onClick={prevSlide} className='cursor-pointer'/>
        </div>

        <div className=' absolute right-10  '>

        {/* Right Arrow........ */}
        <ArrowForwardIosIcon onClick={nextSlide} className='cursor-pointer'/>
</div>
        </div>

         </section>
    )
}


export default Transformation;






