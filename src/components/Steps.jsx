export default function Steps() {
  const Step = [
    {
      image: "https://d2a61ob4m0n1zq.cloudfront.net/newHome/1.svg",
      Tittle: "Connect with your Expert",
      Para: "Chat anonymously with a YourDOST expert who's here to help you and not judge you.",
    },
    {
      image: "https://d2a61ob4m0n1zq.cloudfront.net/newHome/2.svg",
      Tittle: "Discuss your Concerns",
      Para: "Open up to your Expert in a space where you get the guidance you need, and your concerns get the attention they deserve.",
    },
    {
      image: "https://d2a61ob4m0n1zq.cloudfront.net/newHome/3.svg",
      Tittle: "Unleash a Better You",
      Para: "With 24X7 support from our experts, bid goodbye to your old self and be on your way to becoming a better you.",
    },
  ];

  const Features = [
    {
      image: "https://dgb1oxf9aexic.cloudfront.net/newHome/17.svg",
      Tittle: "Online Chat Sessions",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis, error inventore ipsa vero minima deserunt incidunt corrupti, atque dignissimos debitis iusto amet sit quasi veritatis laboriosam labore at hic!",
    },
    {
      image: "https://dgb1oxf9aexic.cloudfront.net/newHome/18.svg",
      Tittle: "Voice Calls",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis, error inventore ipsa vero minima deserunt incidunt corrupti, atque dignissimos debitis iusto amet sit quasi veritatis laboriosam labore at hic!",
    },
    {
      image: "https://dgb1oxf9aexic.cloudfront.net/newHome/19.svg",
      Tittle: "Face to Face Sessions",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis, error inventore ipsa vero minima deserunt incidunt corrupti, atque dignissimos debitis iusto amet sit quasi veritatis laboriosam labore at hic!",
    },
  ];

  return (
    <div className="px-5 md:px-0">
      <section className="mt-20">
        <div>
          <h1 className="text-3xl font-semibold text-center md:text-4xl ">
            Four Steps to unleash a better you
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 mt-16 md:gap-0 lg:px-36 md:flex-row">
            {Step.map((item, i) => {
              return (
                <div
                  key={i}
                  className=" mx-auto space-y-3 md:max-w-xl flex flex-col  items-center"
                >
                  <div className="w-full">
                    <img src={item.image} alt={item.image} className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-lg text-[#000000] font-semibold ">
                      {item.Tittle}
                    </h1>
                    <p className="text-sm font-medium  w-72 text-[#8ca1b3] leading-6">
                      {item.Para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center my-10 divide-y-2 md:divide-y-0 md:divide-x-2 md:flex-row">
        {Features.map((item, i) => {
          return (
            <div
              className="flex gap-5 p-4 duration-300 ease-in-out shadow-xl cursor-pointer shadow-slate-200 hover:bg-gray-50"
              key={i}
            >
              <div>
                <img src={item.image} className="w-20 h-20" alt={item.image} />
              </div>
              <div className="max-w-xs space-y-2">
                <h1 className="text-sm md:text-lg lg:text-xl text-[#000000] font-semibold">
                  {item.Tittle}
                </h1>
                <p className="text-xs leading-5">{item.Para}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
