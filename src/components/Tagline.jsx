
const Tagline = () => {
  
  return (
    <section className="mt-28">
      <div className="flex flex-col space-y-8 text-center md:items-center md:justify-around">
        {/* head */}
        <div 
        className="space-y-2 text-3xl font-semibold md:text-4xl">
          <h1>The 9 essential elements of </h1>
          <h1 className="">life mystery </h1>
        </div>
        {/* para */}
        <div 
        className="px-5 leading-6 md:max-w-5xl md:px-3 ">
          <p className=" md:text-lg text-[#8ca1b3] leading-7">
            We believe in the power of holistic growth and development. From
            personal and professional growth, to physical and emotional
            well-being, we believe that these elements are crucial to living a
            fulfilling and successful life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tagline;
