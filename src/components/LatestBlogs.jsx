import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export default function LatestBlogs() {
  const navigate = useNavigate();

  const [AllBlogs, setAllBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "BLOGS");
        const querySnapshot = await getDocs(collectionRef);
        const blogsData = [];
        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            blogsData.push(doc.data());
          }
        });
        setAllBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-24 text-center">
        <h1 className="text-3xl font-semibold lg:text-5xl">
          Latest on Your{" "}
          <span className="font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
            MentorHeal
          </span>{" "}
          Blog
        </h1>
      </div>
      <section className="flex flex-col items-center justify-center gap-10 pb-10 mt-10 md:grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:px-10">
        {AllBlogs?.slice(0, 3)?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div
                className="max-w-sm p-5 space-y-2 cursor-pointer md:max-w-md lg:max-w-lg"
                onClick={() => {
                  navigate(`/ReadFull`, {
                    state: {
                      Tags: item.Category,
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
                <div className="flex justify-end gap-5 pt-5">
                  {item.Category?.map((item, index) => {
                    return (
                      <>
                        <button
                          key={index}
                          className="px-5 py-1 text-sm font-semibold text-[#5e626e] bg-[#dee6ef]"
                        >
                          #{item}
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
      <div className="flex justify-center ">
        <button className="px-9 py-3 bg-[#00b8d3] text-white font-semibold rounded-3xl">
          Read More Articles
        </button>
      </div>
    </>
  );
}
