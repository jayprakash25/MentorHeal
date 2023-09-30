import React from "react";
import NavBar from "./NavBar";
import AllBlogs from "./../Data/BlogsData";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <main>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-10 pt-24 pb-10 md:grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:px-10">
        {AllBlogs.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div
                className="max-w-sm md:max-w-md lg:max-w-lg space-y-2 border-[1px] border-slate-300 p-5 shadow-md shadow-slate-200 cursor-pointer"
                onClick={() => {
                  navigate(`/ReadFull`, {
                    state: {
                      Blogimage: item.Blogimage,
                      BLogTittle: item.BLogTittle,
                      Sections: item.BlogSections,
                    },
                  });
                }}
              >
                <div>
                  <img
                    src={item.Blogimage}
                    className="rounded-md"
                    alt={item.Blogimage}
                  />
                </div>
                <div>
                  <h1 className="font-bold underline">{item.BLogTittle}</h1>
                </div>
                <div className="flex justify-end">
                  <button className="px-3 py-1 text-sm font-semibold text-white bg-black">
                    {item.Category}
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </main>
  );
}
