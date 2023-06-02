
const Tagline = () => {
  
  return (
    <section className="my-12">
      <div className="flex flex-col   md:items-center md:justify-around space-y-8 text-center">
        {/* head */}
        <div 
        className="text-3xl md:text-4xl space-y-2 ">
          <h1>The 9 essential elements of </h1>
          <h1 className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">life mystery </h1>
        </div>
        {/* para */}
        <div 
        className="leading-6 md:max-w-5xl px-5 md:px-3 ">
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
