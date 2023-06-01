import { ArrowBackIos } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';
import Aos from 'aos';

import { useEffect, useState } from 'react';

const Transformation = () => {

const slides = [
    {   
        id: 1,
        story: ' "Their approach to wellness is truly holistic, taking into account all aspects of my life including nutrition, exercise, stress management, and self-care. My mentor was incredibly knowledgeable and supportive, providing me with personalized guidance and practical tools to help me achieve my goals. With their help, I was able to make significant improvements in my overall well-being and feel more empowered to take charge of my health. I highly recommend this company to anyone looking for a comprehensive and transformative wellness experience." ',
        name: 'RAJ SONI '
    },
    {
        id: 2,
        story: ' "I am amazed at the progress I have made. Their team of experts has helped me identify and overcome obstacles that were holding me back from achieving my full potential. Their approach to wellness is unique, combining evidence-based practices with a compassionate and supportive approach. They have helped me develop new habits and strategies for success that have improved my overall well-being and productivity. I am truly grateful for their support and highly recommend their services to anyone who is looking to live their best life." ',
        name: 'RUDRA SINGH'   
    },
    {
        id: 3,
        story: ' "Their team is incredibly skilled, empathetic, and supportive, and they have helped me make significant improvements in my life. With their guidance, I have been able to overcome my limiting beliefs and tap into my full potential. Their approach to wellness is truly transformative, focusing on creating sustainable habits that promote overall well-being. I am grateful for their continued support and highly recommend their services to anyone who is looking to live their best life." ',
        name: 'VISHAL VERMA'
    },
    {
        id: 4,
        story: ' "Their team is incredibly skilled, empathetic, and supportive, and they have helped me make significant improvements in my life. With their guidance, I have been able to overcome my limiting beliefs and tap into my full potential. Their approach to wellness is truly transformative, focusing on creating sustainable habits that promote overall well-being. I am grateful for their continued support and highly recommend their services to anyone who is looking to live their best life." ',
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

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
    return (

        <div className="flex flex-col items-center m-8">
        <div data-aos = "zoom-in">
        <h1 className='text-3xl md:text-5xl font-semibold py-4'>Our Stories Of <span className='bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold'>Transformation</span></h1>
        </div>       
        <div className=" mx-auto flex gap-7 md:gap-0  flex-col  md:grid grid-cols-2 p-4">
          {slides.map((testimonial, index) => (
            <div
              data-aos = "flip-down"
              key={testimonial.id}
              className={`${
                index === slide ? 'opacity-100 z-10' : 'md:opacity-10  z-0'
              }  transition-opacity duration-500  ease-in-out my-5`}
            >
              <div className="bg-white p-6 rounded shadow-md">
                <p className="text-[#8ca1b3] leading-7">{testimonial.story}</p>
                <p className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent my-4 bg-clip-text font-bold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-4 hidden md:block space-x-2">
          <button
            onClick={prevSlide}
          >
          <ArrowBackIos className='stroke-cyan-500' />
          </button>
          <button
            className=""
            onClick={nextSlide}
          >
            <ArrowForwardIos className='stroke-cyan-500' />
          </button>
        </div>
      </div>
    );
  };
  

export default Transformation;



