const Why = ({ Data }) => {
  return (
    <div className="bg-gradient-to-r  from-[#e8f4ef] to-[#faebe5]  p-8 flex flex-col items-center justify-center  rounded-lg">
      <div>
        <h1 className="text-3xl font-semibold md:text-5xl">
          Why{" "}
          <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text ">
            MentorHeal?
          </span>
        </h1>
      </div>
      <div className="grid justify-center grid-cols-1 gap-16 my-20 text-center lg:flex place-items-center md:my-10 md:mt-20">
        {Data.map((item, index) => {
          return (
            <div
              className="flex flex-col items-center space-y-5 duration-300 ease-in-out hover:scale-105 "
              key={index}
            >
              <img
                src={item.image}
                className="w-48 h-48 rounded-full lg:w-36 lg:h-36"
              />
              <h1 className="md:text-sm">{item.Tittle}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
// md:max-w-[12vw] max-w-[30vw]
