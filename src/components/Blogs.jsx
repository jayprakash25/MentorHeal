import React, { useState } from "react";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
// import DOMPurify from "dompurify";
export default function Blogs() {
  const navigate = useNavigate();
  // const location = useLocation();
  const [blogsD, setBlogsD] = useState([]);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    //to prevent XSS attacks as fetching html from db
    // const sanitizedData = DOMPurify.sanitize(data);
    setBlogsD(data);
  };
  return (
    <section className="lg:grid-cols-3 px-8 pt-24 pb-7 gap-7 md:grid md:grid-cols-2 place-items-center lg:grid flex flex-col justify-center items-center">
      {blogsD.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div
              onClick={() => {
                navigate(`/ReadFull`, {
                  state: {
                    image: item.image,
                    Blog: item.Blog,
                  },
                });
              }}
              className=" max-w-md max-h-[100vh] cursor-pointer p-6 md:max-w-lg border-[1px] border-slate-200 rounded-xl shadow-md space-y-3"
            >
              <div>
                <img src={item.image} className="rounded-lg" alt={item.image} />
              </div>

              {/* use dompurify and sanitize fetched data if any xss attacks  */}
              <div
                className="pt-6"
                dangerouslySetInnerHTML={{ __html: item.Blog.slice(0, 250) + "......" }}
              />
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
}
