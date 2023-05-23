import TeamCard from "./TeamCard";

const Team = () => {
    return (
        <div  className="">
        <div className="flex items-center justify-center">
            <h1 className="font-bold text-[34px] md:text-[41px] lg:text-[48px] leading-10 md:leading-[44px] lg:leading-none  text-center md:w-[487px]">Our Leading, Strong And Creative team</h1>
        </div>
        <div className="md:grid flex flex-col justify-center   md:grid-cols-3  items-center m-8 gap-4 ">

        <TeamCard name = "James Bond" role="Developer"/>
        <TeamCard name = "James Bond" role="Developer"/>
        <TeamCard name = "James Bond" role="Developer"/>
        <TeamCard name = "James Bond" role="Developer"/>
        <TeamCard name = "James Bond" role="Developer"/>
        <TeamCard name = "James Bond" role="Developer"/>
       

        </div>
        {/* <TeamCard/> */}

        </div>
    )
}


export default Team;