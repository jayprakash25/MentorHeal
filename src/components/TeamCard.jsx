import Profile from "../assets/images/profile.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const TeamCard = (props) => {
   
    return (
        <div className="border-[0.44px] rounded-xl border-[#000000] w-[200px] justify-center lg:w-[90%] lg:h-[450px] flex flex-col items-center p-2 pt-3 lg:pt-0 shadow-lg">
        <img src={Profile} className="lg:w-[65%]"/>
        <div className="flex flex-col justify-center items-center gap-1 mt-[9px] lg:mt-5 ">
            <h1 className="font-inter text-[14px] lg:text-[28px] ">{props.name}</h1>
            <p className="font-normal text-[10.5px] lg:text-[20px]">{props.role}</p>
        </div>
        <div className="flex gap-[11px] py-2">
            <InstagramIcon/>
            <LinkedInIcon/>
        </div>


        </div>

    )
}


export default TeamCard