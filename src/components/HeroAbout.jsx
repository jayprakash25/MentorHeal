import heromobile from "../assets/images/Heromobile.png"
import heroweb from "../assets/images/Heroweb.png"



const HeroAbout = () => {
    return (
        <div className='bg-[#F3F7F5] mx-8  flex flex-col items-center rounded-3xl '>
        <h1 className='font-poppins text-[29px] md:text-[43px] lg:text-[56px] leading-9 md:leading-[55px] lg:leading-[70px] lg:w-[573px] text-center pt-16'>We're changing the whole game.</h1>
        <div className='font-poppins flex gap-4 my-5 text-[11px]  items-center'>
          <button className='bg-black outline-double outline-1 text-white rounded-3xl px-6 py-3  transition duration-300 ease-in-out hover:bg-white hover:text-black'>Get Started</button>
          <button className='bg-white outline-double outline-1 rounded-3xl px-6 py-3 transition duration-300 ease-in-out hover:bg-black hover:text-white'>View Pricing</button>
        </div>
        <img className='md:hidden' src={heromobile}/>
        <img className='hidden md:flex ' src={heroweb}/>
        </div>
  
    )
}

export default HeroAbout