import health from '../assets/images/health.png'

const Card = () => {
    return (
        <div className='flex justify-center'>
        <div className="w-[344px]  bg-[#F3F7F5] rounded-[30px] flex flex-col items-center gap-5 pb-10">

            <img src={health} className='bg-white p-4 rounded-full mt-5'/>
            <h1 className='text-2xl font-poppins'>Health</h1>
            <p className='w-[80%] text-[13px] '>We believe in the power of holistic growth and development. From personal and professional growth, to physical and emotional well-being, we believe that these elements are crucial to living a fulfilling life.</p>
            <p className='font-poppins cursor-pointer text-[13px] text-[#E27066]'>Read More</p>
        </div>
        </div>
    )
}




export default Card;