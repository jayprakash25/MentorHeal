import React from "react";

export default function Mentors({ filterCategeory }) {
  const dummydata = [
    {
      image:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Rohit",
      Categeory: "Relationship",
      Rating: "4",
      Conversation: "100",
      NextAppointment: "Mon , 5th oct",
      LastAppointment: "Sun , 4th oct",
      Schedule: [
        {
          day: "Sun",
          Time: "07:00 pm - 10:00 pm",
        },
        {
          day: "Mon",
          Time: "07:00 pm - 10:00 pm",
        },
        {
          day: "Tue",
          Time: "07:00 pm - 10:00 pm",
        },
        {
          day: "Fri",
          Time: "07:00 pm - 10:00 pm",
        },
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Rohit",
      Categeory: "Career",
      Rating: "4",
      Conversation: "100",
      NextAppointment: "Mon , 5th oct",
      LastAppointment: "Sun , 4th oct",
      Schedule: [
        {
          day: "Sun",
          Time: "07:00 pm - 10:00 pm",
        },
        {
          day: "Mon",
          Time: "07:00 pm - 10:00 pm",
        },
        {
          day: "Tue",
          Time: "07:00 pm - 10:00 pm",
        },
        {
          day: "Fri",
          Time: "07:00 pm - 10:00 pm",
        },
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Rohit",
      Categeory: "Relationship",
      Rating: "4",
      Conversation: "100",
      NextAppointment: "Mon , 5th oct",
      LastAppointment: "Sun , 4th oct",
      Schedule: [
        {
          day: "Sun",
          Time: "07:00 pm - 10:00 pm",
        },
        {
          day: "Mon",
          Time: "07:00 pm - 10:00 pm",
        },
        {
          day: "Tue",
          Time: "07:00 pm - 10:00 pm",
        },
        {
          day: "Fri",
          Time: "07:00 pm - 10:00 pm",
        },
      ],
    },
  ];

  console.log(filterCategeory);

  return (
    <>
      <section className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 px-10">
        {dummydata
          .filter((item) => {
            if (filterCategeory === "") {
              return item;
            } else if (
              filterCategeory
                ?.toLowerCase()
                .includes(item.Categeory.toLowerCase())
            ) {
              return item;
            }
          })
          .map((_, i) => {
            return (
              <React.Fragment key={i}>
                <div className="  p-7 shadow-xl  cursor-pointer shadow-gray-200 border-[1px] border-gray-200 rounded-lg">
                  <div className="flex gap-5 ">
                    <div>
                      <img
                        className="w-40 h-40 object-cover rounded-full"
                        src={_.image}
                        alt={_.image}
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-[#636363]">
                        {_.Name}
                      </h1>
                      <p className="text-sm font-semibold mt-2 text-gray-500">
                        {_.Categeory}
                      </p>
                      <p className="mt-3 text-xs text-gray-500">
                        ⭐⭐⭐⭐({_.Rating})
                      </p>
                      <p className="mt-1 text-sm text-gray-500 font-semibold">
                        Conversations : {_.Conversation}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <h1 className="text-xs ">
                      <span className="text-gray-500 font-semibold">
                        Next Available Appointment{" "}
                      </span>{" "}
                      :{" "}
                      <span className="text-slate-500">
                        {_.NextAppointment}
                      </span>
                    </h1>
                    <h1 className="text-xs ">
                      <span className="text-gray-500 font-semibold">
                        Last Appointment{" "}
                      </span>{" "}
                      :{" "}
                      <span className="text-slate-500">
                        {_.LastAppointment}
                      </span>
                    </h1>

                    <div className="flex justify-end">
                      <p className="text-xs text-slate-500 font-semibold">
                        see more
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-2">
                    <button className="hover:bg-[#62d6e8] border-[1px] border-green-300 hover:text-white  w-full py-2  font-semibold ease-in-out duration-500">
                      Book
                    </button>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </section>
    </>
  );
}
