const Tagline = () => {
  return (
    <section className="my-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-around space-y-5 text-center">
        {/* head */}
        <div className="text-3xl space-y-2 ">
          <h1>The essential elements of </h1>
          <h1 className="text-[#E27066]">life mystery </h1>
        </div>
        {/* para */}
        <div className="leading-6 md:max-w-lg">
          <p className="text-sm md:text-base  leading-5 px-2 ">
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
