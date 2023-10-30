import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../../Firebase";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";

export default function Posts() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "POSTS"));
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(posts);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="p-2  mx-auto space-y-5  w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] mt-7">
        <div className="flex flex-col gap-5">
          {data?.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  className="border-[1px] border-gray-300 p-5 cursor-pointer"
                  onClick={() => {
                    navigate(`/queries/${item.id}/${item.ask}`, {
                      state: {
                        q: item?.ask,
                        comment: item?.comment,
                      },
                    });
                  }}
                >
                  <div className="flex items-start justify-start gap-5 ">
                    <img
                      src={
                        "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                      }
                      alt={
                        "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                      }
                      className="rounded-full w-7 h-7"
                    />
                    <h1 className="text-lg font-bold">{item.ask}</h1>
                  </div>
                  {/* <ul className="flex flex-col gap-2.5 mt-3">
                    {item?.comments?.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-5 text-sm"
                        >
                          <img
                            src={
                              "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                            }
                            alt={
                              "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                            }
                            className="rounded-full w-7 h-7"
                          />
                          <p>{item?.Postcomment}</p>
                        </div>
                      );
                    })}
                  </ul> */}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
