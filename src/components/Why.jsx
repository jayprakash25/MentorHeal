import image1 from "../assets/images/image1.png"
import image2 from "../assets/images/image2.png"
import image3 from "../assets/images/image3.png"
import image4 from "../assets/images/image4.png"
import image5 from "../assets/images/image5.png"
import image6 from "../assets/images/image6.png"




const WhyCard = () => {
    return (
        <div className="items-center  flex-col flex m-auto">
            <img className="w-[80%] lg:w-[230px] " src={image1}/>
            <h1 className="text-[18px] lg:text-[26px] font-bold p-4 text-center">One on One Mentorship</h1>
        </div>
    )
}




const Why = ()=> {
    return (
        <div className="bg-[#F3F7F5] m-8 rounded-3xl flex flex-col items-center justify-center ">
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-poppins my-5">Why MentorThrive</h1>
        <div className="grid gap-3 md:grid-cols-3 lg:gap-10 py-4 ">
          <WhyCard/>
          <WhyCard/>
          <WhyCard/>
          <WhyCard/>
          <WhyCard/>
          <WhyCard/>
        </div>
        </div>
    )
}


export default Why