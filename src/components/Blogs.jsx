import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import BlogsData from "../Data/BlogsData";
import Loader from "./Loader";
export default function Blogs() {
  const navigate = useNavigate();
  const [AllBlogs, setAllBlogs] = useState(null);
  const [loading, setloading] = useState(true);

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
        setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-10 pt-24 pb-10 md:grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:px-10 bg-white border-[0.5px]">
        {loading ? (
          <Loader text={"loading..."} />
        ) : (
          BlogsData?.map((item, index) => {
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
          })
        )}
      </div>
    </main>
  );
}
