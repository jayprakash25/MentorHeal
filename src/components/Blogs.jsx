import React from "react";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const navigate = useNavigate();

  const Data = [
    {
      image:
        "https://images.pexels.com/photos/17660191/pexels-photo-17660191/free-photo-of-cold-snow-wood-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      Tittle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quidem labore, sapiente possimus animi fugit inventore aliquid voluptatibus, et odio facere quisquam sed. Ipsa aliquam corporis praesentium architecto necessitatibus. Quisquam, eveniet nesciunt dicta assumenda repellat molestiae sit, veniam nihil libero, obcaecati natus eius ut inventore!",
    },
    {
      image:
        "https://images.pexels.com/photos/14805740/pexels-photo-14805740.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      Tittle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quidem labore, sapiente possimus animi fugit inventore aliquid voluptatibus, et odio facere quisquam sed. Ipsa aliquam corporis praesentium architecto necessitatibus. Quisquam, eveniet nesciunt dicta assumenda repellat molestiae sit, veniam nihil libero, obcaecati natus eius ut inventore!",
    },
    {
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quidem labore, sapiente possimus animi fugit inventore aliquid voluptatibus, et odio facere quisquam sed. Ipsa aliquam corporis praesentium architecto necessitatibus. Quisquam, eveniet nesciunt dicta assumenda repellat molestiae sit, veniam nihil libero, obcaecati natus eius ut inventore!",
    },
    {
      image:
        "https://images.pexels.com/photos/17583913/pexels-photo-17583913/free-photo-of-nevado-callangate-cusco.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      Tittle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quidem labore, sapiente possimus animi fugit inventore aliquid voluptatibus, et odio facere quisquam sed. Ipsa aliquam corporis praesentium architecto necessitatibus. Quisquam, eveniet nesciunt dicta assumenda repellat molestiae sit, veniam nihil libero, obcaecati natus eius ut inventore!",
    },
    {
      image:
        "https://images.pexels.com/photos/14805740/pexels-photo-14805740.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      Tittle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quidem labore, sapiente possimus animi fugit inventore aliquid voluptatibus, et odio facere quisquam sed. Ipsa aliquam corporis praesentium architecto necessitatibus. Quisquam, eveniet nesciunt dicta assumenda repellat molestiae sit, veniam nihil libero, obcaecati natus eius ut inventore!",
    },
    {
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quidem labore, sapiente possimus animi fugit inventore aliquid voluptatibus, et odio facere quisquam sed. Ipsa aliquam corporis praesentium architecto necessitatibus. Quisquam, eveniet nesciunt dicta assumenda repellat molestiae sit, veniam nihil libero, obcaecati natus eius ut inventore!",
    },
  ];

  return (
    <section className="lg:grid-cols-3 px-8 pt-24 pb-7 gap-7 md:grid md:grid-cols-2 place-items-center lg:grid flex flex-col justify-center items-center">
      {Data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div
              onClick={() => {
                navigate(`/ReadFull`, {
                  state: {
                    image: item.image,
                    Tittle: item.Tittle,
                    Para: item.Para,
                  },
                });
              }}
              className=" max-w-md cursor-pointer p-6 md:max-w-lg border-[1px] border-slate-200 rounded-xl shadow-sm space-y-3"
            >
              <div>
                <img src={item.image} className="rounded-lg" alt={item.image} />
              </div>
              <div className=" space-y-3.5 text-left">
                <h1 className="text-2xl font-semibold leading-9">
                  {item.Tittle}
                </h1>
                <p className="md:text-[15px] leading-7 text-[#5b6e80]">
                  {item.Para.slice(0, 300)}...
                </p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
}
