const Appointment = () => {
  return (
    <div className="mt-32 bg-[#00b8d3] py-8 m-10 rounded-lg lg:rounded-full shadow-md">
      <section className="flex flex-col lg:flex-row md:items-center md:justify-around space-y-7 text-white text-center lg:space-y-0 ">
       
        {/*-------------------- Text---------------- */}
        <div className="text-xl max md:max-w-[40vw] md:text-left md:text-3xl space-y-2 lg:space-y-6 ">
          <h1 className="leading-10 font-semibold text-white">
            Ready to make a leap to the best of you? 
          </h1>
          <p className="font-normal text-sm ">Be the change you wish to see in yourself.</p>
        </div>
       
        {/* --------------------Button------------------*/}
        <div className="md:max-w-lg">
          <button className="  bg-white text-black   px-7 py-2 rounded-full tracking-wide text-sm">
            <a href="https://zcal.co/i/xervLEsh">Book Your Session</a>
          </button>
        </div>

      </section>
    </div>
  );
};

export default Appointment;
