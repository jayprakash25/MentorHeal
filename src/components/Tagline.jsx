const Tagline = () => {
  return (
    <section className="my-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-around space-y-8 text-center">
        {/* head */}
        <div className="text-3xl md:text-5xl space-y-2 ">
          <h1>The 8 essential elements of </h1>
          <h1 className="text-[#E27066]">life mystery </h1>
        </div>
        {/* para */}
        <div className="leading-6 md:max-w-lg px-5 md:px-3 ">
          <p className=" md:text-lg  leading-7">
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
