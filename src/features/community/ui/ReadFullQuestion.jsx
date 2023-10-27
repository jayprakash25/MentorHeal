import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { Footer } from "../../../components";
import { useState } from "react";
import ReplyModel from "../ReplyModel";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Firebase";
export default function ReadFullQuestion() {
  const data = useLocation();

  const [Reply, setReply] = useState(false);
  const [Comments, setComments] = useState();

  const { postid } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const postRef = doc(db, "POSTS", postid);
        const postSnapshot = await getDoc(postRef);
        setComments(postSnapshot.data().comments);
        console.log(postSnapshot.data().comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="p-2 pb-14 mx-auto space-y-5  w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] mt-7">
        <div className="flex flex-col gap-5">
          <div className="border-[1px] border-gray-300 p-5 cursor-pointer">
            <div className="flex items-start justify-start gap-5">
              <img
                src={
                  "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                }
                alt={
                  "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                }
                className="w-7 h-7 rounded-full"
              />
              <h1 className="text-lg font-bold">{data?.state?.q}</h1>
            </div>
            <div className="flex items-end justify-end text-[#8c8d8e] font-semibold mt-4">
              <div
                className="flex items-center gap-3"
                onClick={() => {
                  setReply(true);
                }}
              >
                <FiEdit size={21} color="gray" />
                <h1 className="font-semibold text-sm cursor-pointer">Reply</h1>
              </div>
            </div>
          </div>
          <ul className=" flex flex-col mt-2.5">
            {Comments?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col gap-5 border-[1px] border-b-0 border-gray-300 p-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                      }
                      alt={
                        "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                      }
                      className="w-7 h-7 rounded-full"
                    />
                    <h1 className="text-sm font-semibold text-gray-500">
                      Rahul
                    </h1>
                    <BsPeople size={20} color="gray" />
                  </div>
                  <div>
                    <p>{item.Postcomment}</p>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
      {Reply ? <ReplyModel setReply={setReply} /> : null}
    </>
  );
}
