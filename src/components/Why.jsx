import lg8 from "../assets/Team/lg8.png";
const Why = () => {
  return (
    <div className="px-1.5 flex flex-col items-center justify-center w-[80vw] mx-auto  my-28 space-y-8">
      <div>
        <h1 className="text-3xl font-semibold md:text-4xl ">Why MentorHeal?</h1>
      </div>
      <div>
        <img src={lg8} className="cursor-pointer h-[50vh] lg:[75vh]" />
      </div>
    </div>
  );
};

export default Why;
// md:max-w-[12vw] max-w-[30vw]
{
  /* {Data.map((item, index) => {
          return (
            <div
              className="flex flex-col items-center space-y-5 duration-300 ease-in-out hover:scale-105 "
              key={index}
            >
              <img
                src={item.image}
                className="w-48 h-48 rounded-full cursor-pointer lg:w-36 lg:h-36"
              />
              <h1 className="md:text-sm">{item.Tittle}</h1>
            </div>
          );
        })} */
}
