import ourVision from '../assets/images/ourVision.png'

const OurVision = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 m-8 items-center md:gap-4 '>
        <img className='w-[369px]' src={ourVision} />
        <div className='mt-8 font-medium  text-[13px] md:text-[16.5px] w-80 lg:text-[20px] lg:w-[562px] text-[#7C7C7C]  '>
            <h1 className='text-black font-bold text-[44px] md:text-[54px] lg:text-[64px] mb-3'>OUR VISION</h1>
            <p>We believe the world will look very different after this pandemic. as it did after the second world warand the financial crisis of 2008. As it always does,after it has faced destruction. </p>
            <p className='mt-4'>We foresee a gigantic acceleration towards digitalisation in all businesses, Businesses need to vet partners, hold money in escrow.</p>
        </div>
        </div>
    )
    
}

export default OurVision