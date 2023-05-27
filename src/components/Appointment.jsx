const Appointment = () => {
  return (
    <div className="my-40">
      <section className="flex flex-col lg:flex-row md:items-center md:justify-around space-y-7 text-center lg:space-y-0 ">
        <div className="text-xl max md:max-w-[60vw] md:text-left md:text-4xl">
          <h1 className="leading-10 font-semibold text-[#E27066]">
            Ready to make a leap to the best of you? Be the change you wish to
            see in yourself
          </h1>
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
