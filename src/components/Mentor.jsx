import Footer from "./Footer"
import NavBar from "./NavBar"
import mentor from "../assets/images/mentor.jpg"
import pro from "../assets/images/pro.png"
import pro2 from "../assets/images/pro2.png"
import pro3 from "../assets/images/pro3.png"
import pro4 from "../assets/images/pro4.png"
import pro5 from "../assets/images/pro5.png"
import pro6 from "../assets/images/pro6.png"
import { useEffect } from "react"
import Aos from "aos"
import { useLocation } from "react-router-dom"



const data = [
    {
        image: pro,
        title: "Choose how you want to mentor",
        line: "Set your own schedule, choose what types of students you want to work with, and get paid for your time.",
    },
    {
        image: pro2,
        title: "We’ll handle the details, you focus on mentoring",
        line: "We’ll connect you with students, manage the scheduling process, and deal with the boring stuff, so you can focus on mentoring!",
    },
    {
        image: pro3,
        title: "No curriculum or tasks",
        line: "There’s no structured curriculum at MentorrNow, so you don’t have to keep up with courses or complete cookie-cutter tasks.",
    },
    {
        image: pro4,
        title: "Flexibility to mentor how you want",
        line: "As a MentorrNow mentor, you’re free to teach in your own style and customize your approach based on your students’ goals.",
    },
    {
        image: pro5,
        title: "Structure to make mentoring easy",
        line: "We provide shared workspaces, frameworks, and projects that you and your students can use (but only if you want to).",
    },
    {
        image: pro6,
        title: "An amazing mentor community",
        line: "You’ll be part of or private mentor community where you can connect with other mentors to share resources and mentoring tips.",
    },
   
]


const Mentor = () => {
    const location = useLocation(); // import { useLocation } from 'react-router-dom';

useEffect(() => {
  // Scroll top when location changes
  window.scrollTo(0, 0);
}, [location]);

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    return (
        <div>
        <NavBar/>

        <div className="pt-32 flex flex-col md:flex-row items-center 
        text-center p-8 space-y-8 md:justify-around ">
            <div data-aos = 'fade-down-right'>
               <img src={mentor} className="max-w-sm md:max-w-md lg:max-w-lg" alt=""/> 
            </div>
            <div 
            data-aos = 'fade-up-left'
            className="md:max-w-lg">
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold">Join our community of world-class mentors</h1>
                    <p className="text-[#8ca1b3]">As a MentorrNow mentor, you’ll get to provide mentorship to students in your own style and on your own schedule (and get paid for it!).</p>
                </div>
                <div className="my-8 flex">
                    <div className="space-y-2.5">
                <h1 className="text-xl font-semibold">Learn</h1>
                <p className="text-[#8ca1b3]">Route among the safe roads. Find whats waiting for you.</p>
                    </div>

                    <div className="space-y-2.5">
                        <h1 className="text-xl font-semibold">Share</h1>
                        <p className="text-[#8ca1b3]">Your caring gets its way. Let your people know.</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="my-4 space-y-14 text-center p-8">
        <div data-aos = 'zoom-in-up'>
            <h1 className="text-2xl lg:text-3xl font-semibold">Here’s why mentor around the world love mentoring on MentorrNow…</h1>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 ">
        
            {data.map((item,index) => {
                return(
                    <div
                    data-aos = 'fade-down-right'
                     key={index} className="flex flex-col items-center px-8 space-y-2.5">
                    <div className="mx-auto">
                <img src={item.image} className="w-16 h-16
                " />
                </div>
                <h1 className="text-xl font-medium">{item.title}</h1>
                <p className="text-[#8ca1b3]">{item.line}</p>
                </div>
                )
            })}
        </div>
        

        </div>

        <Footer/>
        </div>
    )
}


export default Mentor