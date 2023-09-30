import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ReadFullBlog() {
  const data = useLocation();

  const { Blogimage, BLogTittle, Sections } = data.state;

  console.log(Blogimage);
  console.log(BLogTittle);
  console.log(Sections);

  return (
    <main>
      <NavBar />
      {/* Blog Banner */}
      <section className="px-7">
        <div className="flex justify-center pt-24">
          <img
            src={Blogimage}
            className="duration-300 ease-in-out rounded-md cursor-pointer hover:brightness-90"
            alt={Blogimage}
          />
        </div>
        <div className="flex justify-center pt-3">
          <h1 className="max-w-2xl font-bold underline lg:text-xl lg:ml-20 sm:ml-20">
            {BLogTittle}
          </h1>
        </div>

        <div className="flex flex-col justify-center gap-8 pb-8 mt-8 ">
          {Sections?.map((item, index) => {
            return (
              <React.Fragment key={index + 1}>
                <div className="space-y-2.5 max-w-xl mx-auto">
                  <h1 className="font-semibold leading-7">{item?.SectionTittle}</h1>
                  <p className="leading-8">{item?.SectionPara}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
