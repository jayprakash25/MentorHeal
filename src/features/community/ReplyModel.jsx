import { doc, getDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { BsPeople } from "react-icons/bs";
import {  useParams } from "react-router-dom";
import { db } from "../../Firebase";

export default function ReplyModel({ setReply }) {
  const [data, setData] = useState({
    Postcomment: "",
  });

  const { postid } = useParams();


  const PostComment = async () => {
    try {
      const postRef = doc(db, "POSTS", postid);
      const postSnapshot = await getDoc(postRef);
      if (postSnapshot.exists()) {
        const post = postSnapshot.data();
        const comments = post.comments || [];
        comments.push(data);
        await updateDoc(postRef, {
          comments: comments,
        });
        setReply(false);
        console.log("Comment added successfully");
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full p-3 overflow-y-scroll bg-black bg-opacity-70 backdrop-blur">
      <div className="space-y-2 bg-white p-6">
        <div className="flex items-center gap-3">
          <img
            src="https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
            alt=""
            className="rounded-full w-7 h-7"
          />
          <button className="text-sm font-semibold text-gray-500 flex items-center gap-2 border-[1px] rounded-full px-8 py-2">
            <h1>Public {postid}</h1>
            <BsPeople size={20} color="gray" />
          </button>
        </div>
        <textarea
          cols={7}
          rows={2}
          value={data.Postcomment}
          onChange={(e) => {
            setData({
              ...data,
              Postcomment: e.target.value,
            });
          }}
          type="text"
          className="mx-auto text-lg w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw]  border-b-2 border-gray-300 outline-none"
          placeholder="Reply"
        />
        <div className="flex justify-end gap-3 text-sm">
          <button
            onClick={() => {
              setReply(false);
            }}
            className="px-5 font-semibold text-white cursor-pointer bg-gradient-to-l from-cyan-400 via-cyan-400 to-cyan-300 py-1.5 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={PostComment}
            className="px-5 font-semibold text-white cursor-pointer bg-gradient-to-l from-cyan-400 via-cyan-400 to-cyan-300 py-1.5 rounded-full"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
