const Appointment = () => {
  return (
    <div className="mt-32 bg-[#F3F2F7] py-14">
      <section className="flex flex-col lg:flex-row md:items-center md:justify-around space-y-7 text-center lg:space-y-0 ">
        <div className="text-xl max md:max-w-[40vw] md:text-left md:text-4xl space-y-6 ">
          <h1 className="leading-10 font-semibold text-black">
            Ready to make a leap to the best of you? 
          </h1>
          <p className="font-normal text-sm">Be the change you wish to see in yourself.</p>
        </div>
        <div className="md:max-w-lg">
          <button className=" font-bold bg-[#E27066]  text-gray-100 px-7 py-2 rounded-lg tracking-wide text-lg">
            <a href="https://zcal.co/i/xervLEsh">Book Your Session</a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
