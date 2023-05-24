import TeamCard from "./TeamCard";

const Team = () => {
    return (
        <div  className="py-14">
        <div className="flex items-center justify-center  ">
            <h1 className="font-bold text-[34px] md:text-[41px] lg:text-[48px] leading-10 md:leading-[55px]  text-center md:w-[487px]">Our Leading, Strong And Creative team</h1>
        </div>
        <div className="md:grid flex flex-col justify-center   md:grid-cols-3  items-center m-8 gap-4 ">

        
        {Array(6).fill(null).map((index) => <TeamCard key={index} name = "James Bond" role="Developer" />)}

       

        </div>
        {/* <TeamCard/> */}

        </div>
    )
}


export default Team;