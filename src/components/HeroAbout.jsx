import heromobile from "../assets/images/Heromobile.png"
import heroweb from "../assets/images/Heroweb.png"



const HeroAbout = () => {
    return (
        <div className='bg-[#F3F7F5] mx-8  flex flex-col-reverse md:flex-row  items-center my-8 '>
        <div className="flex flex-col items-center ">
        <h1 className='font-poppins text-xl md:text-4xl lg:text-5xl leading-9 md:leading-[50px] lg:leading-[65px] lg:w-[573px] text-center py-4 md:pt-16'>We're changing the whole game.</h1>
        <div className='font-poppins flex gap-2 md:gap-4 pb-8 md:pb-0 md:my-5 text-[11px]  items-center'>
          <button className='bg-black outline-double outline-1 text-white rounded-3xl px-6 py-3  transition duration-300 ease-in-out hover:bg-white hover:text-black'>Get Started</button>
          <button className='bg-white outline-double outline-1 rounded-3xl px-6 py-3 transition duration-300 ease-in-out hover:bg-black hover:text-white'>View Pricing</button>
        </div>
        </div>
        <img className='md:hidden max-w-xs p-4' src={heromobile}/>
        <img className='hidden md:flex ' src={heroweb}/>
        </div>
  
    )
}

export default HeroAbout