// import image1 from "../assets/images/image1.png";
// import image2 from "../assets/images/image2.png";
// import image3 from "../assets/images/image3.png";
// import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
// import image6 from "../assets/images/image6.png";

const Data = [
  {
    // image: image1,
    image:
      "https://img.freepik.com/free-vector/internship-concept-illustration_114360-6225.jpg?w=740&t=st=1690296093~exp=1690296693~hmac=c7727bf61d5cdcf04e44dde6e64500bf4795b57a99c97fe7d65e561d2c5427e9",

    Tittle: "One on One Mentorship",
  },
  {
    // image: image2,
    image:
      "https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?w=900&t=st=1690296164~exp=1690296764~hmac=9d55897b6a5d0ecdf9f7169134b573c3a0ff075c5ce146a24d499a8b51914f25",
    Tittle: "Top Mentors",
  },
  {
    // image: image3,
    image:
      "https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_52683-77063.jpg?w=740&t=st=1690296040~exp=1690296640~hmac=921519f5ec9e514cc906655285cbd6dbe2f85cf5ec5f38691d4dd5da36ed08bf",
    Tittle: "Experienced On-Site Mentors",
  },
  {
    // image: image4,
    image:
      "https://img.freepik.com/free-vector/data-protection-law-illustration-concept_114360-971.jpg?w=900&t=st=1690296223~exp=1690296823~hmac=35dcb97cb048df52119d80608ae6373b60011a6f00c46f506e3b50f3e58206e5",
    Tittle: "Confidential Conversations",
  },
  {
    image: image5,
    Tittle: "Commutiy Support",
  },
  {
    image:
      "https://img.freepik.com/free-psd/3d-illustration-young-businessman-sits-holding-trophy-hight-pie-chart_1150-53803.jpg?w=740&t=st=1690295622~exp=1690296222~hmac=03491a9b69a391df851b6bb3cde144c0b4597292d7704bb0d2e846722abdce08",
    Tittle: "Authentic Guidance",
  },
];

const Why = () => {
  return (
    <div className="bg-gradient-to-r  from-[#e8f4ef] to-[#faebe5]  p-8 flex flex-col items-center justify-center  rounded-lg">
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold">
          Why{" "}
          <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold ">
            MentorHeal?
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:flex justify-center place-items-center my-20 md:my-10 md:mt-20 text-center gap-16">
        {Data.map((item, index) => {
          return (
            <div
              className="space-y-5 flex flex-col items-center hover:scale-105 duration-300 ease-in-out "
              key={index}
            >
              <img
                src={item.image}
                className="h-48 w-48  lg:w-36 lg:h-36 rounded-full"
              />
              <h1 className="md:text-sm">{item.Tittle}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
// md:max-w-[12vw] max-w-[30vw]
