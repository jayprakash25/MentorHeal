import path from "../assets/images/path.jpg"
import booking from "../assets/images/booking.jpg"
import meet from "../assets/images/meet.jpg"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Card } from "./Card"






const FAQs = ({Q, children}) => {
const [open, setOpen] = useState(false);

const toggle = () => {
    setOpen(!open);
}


    return (
        <div className="space-y-2">
        <div className="flex cursor-pointer justify-between max-w-md " onClick={toggle}>
            <h1 className="font-semibold md:text-xl">{Q}</h1>
            <p className="">{open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</p>
            </div>
            {open && <p>{children}</p>}
        </div>
    )
}







const HowContent = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [location]);


    const data = [
        {
            Q: "How do I choose the right mentor for me?",
            Ans: " When choosing a mentor, explore their profiles to find someone who aligns with your goals, values, and experiences. Consider their expertise, background, and areas of specialisation to ensure a good fit for your personal growth journey. ",
        },
        {
            Q: "How often should I schedule 1-on-1 video sessions with my mentor?",
            Ans:"The frequency of sessions depends on your needs and preferences. It is common to schedule sessions weekly, biweekly, or monthly. Discuss with your mentor to determine a schedule that works best for both of you. ",
        },
        {
            Q: " What can I expect during a mentoring session?",
            Ans:"Mentoring sessions provide a safe and supportive space for open conversations. You can discuss your challenges, aspirations, and desired outcomes. Your mentor will actively listen, provide guidance, and share insights to help you on your personal growth journey."
         },
         {
            Q: "How long does it take to see results from mentorship?",
            Ans:"The timeline for results varies for each individual and depends on factors such as the nature of your goals, your commitment to implementing guidance, and the complexity of your challenges. Remember that personal growth is a continuous process, and progress may be gradual but transformative."
         }
    ]

    // const [point, setpoint] = useState(false);

    return (
        <div className="pt-24 p-8">
        <h1 className="text-4xl lg:text-6xl  text-center pb-14">How it Works?</h1>

        <div className="space-y-6">

                {/* first section...... */}

        <div 
        // data-aos = "zoom-in"
        className="flex flex-col md:flex-row items-center md:justify-around">
            <img src={path} className="max-w-sm md:max-w-md" />
            <div className="py-2 space-y-2">
                
                <h1  className="font-semibold text-2xl lg:text-3xl text-[#00b8b3] ">1. Select a Category</h1>
                <p className="max-w-sm text-[#7C7C7C] text-[13px] md:text-[16.5px] lg:text-[20px] leading-5 md:leading-7 lg:leading-8 md:max-w-md">Go to the category relevant to you. Select one with a journey most relevant to yours.</p>
            </div>
        </div>

        {/* second section...... */}
        <div 
                // data-aos = "zoom-in"
        className="flex flex-col items-center md:flex-row-reverse md:justify-around">
            <img src={booking} className="max-w-sm md:max-w-md" />
            <div className="py-2 space-y-2">
                <h1 className="font-semibold text-2xl text-[#00b8b3] lg:text-3xl">2. Book a Slot</h1>
                <p className="max-w-sm  text-[#7C7C7C] text-[13px] md:text-[16.5px] lg:text-[20px] leading-5 md:leading-7 lg:leading-8 md:max-w-md">Click &apos;Schedule your time&apos; and then use the calender to book a slot that is convenient to you. </p>
            </div>
        </div>

        {/* Third section...... */}
        <div 
                // data-aos = "zoom-in"
        className="flex flex-col items-center md:flex-row md:justify-around">
            <img src={meet} className="max-w-sm md:max-w-md"/>
            <div className="py-2 space-y-2">
                <h1 className="font-semibold text-2xl text-[#00b8b3] lg:text-3xl">3. Join the Session</h1>
                <p className="max-w-sm  text-[#7C7C7C] text-[13px] md:text-[16.5px] lg:text-[20px] leading-5 md:leading-7 lg:leading-8 md:max-w-md">Once booked, you will receive a video link in email/on whatsapp for the selected time slot with your Mentor.</p>
            </div>
        </div>

        </div>

        <div className="py-8 pt-12">
        <h1 className="text-3xl lg:text-5xl text-center">Explore by <span className="text-[#00b8b3] ">Categories</span></h1>
        <Card />

        </div>

            {/* FAQ's...... */}
            
            <div className="py-8 pb-0">
                <h1 className="text-[#00b8b3] text-xl md:text-2xl lg:text-3xl pb-5">FAQ&apos;s</h1>

                <div>
               {data.map((item,index) => {
                return(
                    <div key={index} className="py-4">
                    <FAQs key={index} Q = {item.Q} >
                    <p className="text-[#7c7c7c] max-w-2xl text-sm md:text-md lg:text-lg
                ">{item.Ans}</p>
                    </FAQs>
                    </div>
                )
               })}

                </div>
            </div>







            </div>

        
        
    )
}


export default HowContent



// {data.map((item,index) => {
//     return(
//         <div key={index} className="">
//         <div className="flex">
//         <h1 className="cursor-pointer" onClick={() => setpoint(!point)}>{item.Q}</h1>
//         <p>+</p>
//         </div>

//         {/* <p>{data[point].Ans}</p> */}
//         {point && <p>{item.Ans}</p> } 

//         </div>
//     )
// })}
