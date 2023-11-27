import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div className=" mt-28 mb-8 shadow-md w-[80vw] mx-auto bg-cyan-500 rounded-lg p-8">
      <section className="flex flex-col text-center text-white lg:flex-row md:items-center md:justify-around space-y-7 lg:space-y-0 ">
        {/*-------------------- Text---------------- */}
        <div className="  md:max-w-[40vw] md:text-left md:text-3xl space-y-4 lg:space-y-6 ">
          <h1 className="text-xl font-semibold text-white lg:text-3xl">
            Ready to make a leap to the best of you?
          </h1>
          <p className="text-lg lg:text-xl">
            Be the change you wish to see in yourself.
          </p>
        </div>
        {/* --------------------Button------------------*/}
        <div className="md:max-w-lg">
          <button className="py-2 text-sm font-semibold tracking-wide text-black bg-white rounded-full px-7">
            <Link to={"/session"}>Book Your Session </Link>
          </button>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default Appointment;
// bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-700