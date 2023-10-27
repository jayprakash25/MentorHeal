import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../../Firebase";
import { useState } from "react";

export default function Posts() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "POSTS"));
        querySnapshot.forEach((doc) => {
          setData(doc.data());
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const Posts = [
    {
      Q: "How are you ? How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?",
      comment: [
        {
          image:
            "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg",
          a: "what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?what do you think ?",
        },

        {
          image:
            "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg",
          a: "what do you think ?",
        },

        {
          image:
            "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg",
          a: "what do you think ?",
        },
      ],
    },
    {
      Q: "How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?",
      comment: [
        {
          image:
            "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg",
          a: "what do you think ?",
        },

        {
          image:
            "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg",
          a: "what do you think ?",
        },

        {
          image:
            "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg",
          a: "what do you think ?",
        },
      ],
    },
  ];

  return (
    <>
      <div className="p-2  mx-auto space-y-5  w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] mt-7">
        <div className="flex flex-col gap-5">
          {Posts?.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  className="border-[1px] border-gray-300 p-5 cursor-pointer"
                  onClick={() => {
                    navigate(`/queries/${item.Q}`, {
                      state: {
                        q: item.Q,
                        comment: item.comment,
                      },
                    });
                  }}
                >
                  <h1 className="text-lg font-bold">{item.Q}</h1>
                  <ul className="flex flex-col gap-2.5 mt-3">
                    {item.comment.slice(0, 1).map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-5 text-sm"
                        >
                          <img
                            src={item.image}
                            alt={item.image}
                            className="w-7 h-7 rounded-full"
                          />
                          <p>{item.a.slice(0, 150)}</p>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
