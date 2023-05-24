import health from "../assets/images/health.png";

export const Card = () => {
  const Carddata = [
    {
      image: health,
      Tittle: "Health",
      Para: "   We believe in the power of holistic growth and development. From personal and professional growth, to physical and emotional well-being, we believe that these elements are crucial to living a fulfilling life.",
    },
    {
      image: health,
      Tittle: "Health",
      Para: "   We believe in the power of holistic growth and development. From personal and professional growth, to physical and emotional well-being, we believe that these elements are crucial to living a fulfilling life.",
    },
    {
      image: health,
      Tittle: "Health",
      Para: "   We believe in the power of holistic growth and development. From personal and professional growth, to physical and emotional well-being, we believe that these elements are crucial to living a fulfilling life.",
    },
    {
      image: health,
      Tittle: "Health",
      Para: "   We believe in the power of holistic growth and development. From personal and professional growth, to physical and emotional well-being, we believe that these elements are crucial to living a fulfilling life.",
    },
    {
      image: health,
      Tittle: "Health",
      Para: "   We believe in the power of holistic growth and development. From personal and professional growth, to physical and emotional well-being, we believe that these elements are crucial to living a fulfilling life.",
    },
    {
      image: health,
      Tittle: "Health",
      Para: "   We believe in the power of holistic growth and development. From personal and professional growth, to physical and emotional well-being, we believe that these elements are crucial to living a fulfilling life.",
    },
  ];

  return (
    <div className="flex flex-col items-center  my-16 justify-center gap-y-5 md:grid grid-cols-3 gap-6 md:px-5">
      {Carddata.map((item, index) => {
        return (
          <>
            <div key={index} className="flex justify-center">
              <div className="max-w-[80vw] shadow-md  bg-[#F3F7F5] rounded-2xl flex flex-col items-center space-y-6 p-5">
                <img src={item.image} className="bg-white py-2 rounded-full" />
                <h1 className="text-3xl font-semibold">{item.Tittle}</h1>
                <p className="text-center text-sm leading-6">{item.Para}</p>
                <p className="font-poppins cursor-pointer text-lg text-[#E27066]">
                  Read More
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export const FirstCard = () => {
  return (
    <div className="px-5 ">
      <section className=" my-10   bg-[#F3F7F5] ">
        <div className=" md:flex md:flex-row-reverse p-7 md:justify-around  items-center md:space-x-5 md:px-5">
          {/* text */}
          <div className="space-y-8 flex py-5 flex-col text-center md:text-left order-2">
            <h1 className="text-2xl md:text-4xl md:max-w-[50vw] leading-8 font-semibold">
              How will mentorship help you?
            </h1>
            <p className="text-sm md:max-w-[50vw] md:text-lg leading-6 md:leading-7">
              Through the guidance and support of a mentor, individuals can gain
              valuable insights, develop new skills, and overcome obstacles that
              they may have otherwise struggled with on their own. Whether in
              business, personal life, or any other aspect of life.
            </p>
          </div>
          {/* image */}
          <div className="my-5 md:my-0">
            <img
              className="md:max-w-[20vw] max-w-sm rounded-lg"
              alt="hero"
              src="https://i.ibb.co/ssvmKXG/image-1.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
