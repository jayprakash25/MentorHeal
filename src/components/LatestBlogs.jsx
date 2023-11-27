import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import AllBlogs from "../Data/BlogsData";

export default function LatestBlogs() {
  const navigate = useNavigate();

  // const [AllBlogs, setAllBlogs] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const collectionRef = collection(db, "BLOGS");
  //       const querySnapshot = await getDocs(collectionRef);
  //       const blogsData = [];
  //       querySnapshot.forEach((doc) => {
  //         if (doc.exists()) {
  //           blogsData.push(doc.data());
  //         }
  //       });
  //       setAllBlogs(blogsData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div className="mt-24 text-center">
        <h1 className="text-3xl font-semibold md:text-4xl">
          Latest on Your MentorHeal Blog
        </h1>
      </div>
      <section className="flex flex-col items-center justify-center pb-10 mt-10 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:px-10">
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
                    className="duration-500 ease-in-out rounded-lg hover:brightness-75"
                    alt={item.Blogimage}
                  />
                </div>
                <div>
                  <h1 className="font-bold underline">{item.BLogTittle}</h1>
                </div>
                <div className="flex justify-end gap-5 pt-5">
                  {item.Category?.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <button
                          key={index}
                          className="px-5 py-1 text-sm font-semibold text-[#5e626e] bg-[#F5F5F5]"
                        >
                          #{item}
                        </button>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
      <div className="flex justify-center ">
        <Link to="/Blog">
          <button className="py-3 font-semibold text-white px-9 bg-cyan-400 rounded-3xl">
            Read More Articles
          </button>
        </Link>
      </div>
    </>
  );
}
