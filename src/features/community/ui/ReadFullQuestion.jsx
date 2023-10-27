import React from "react";
import { useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { Footer } from "../../../components";
import { useState } from "react";
import ReplyModel from "../ReplyModel";
export default function ReadFullQuestion() {
  const data = useLocation();

  const [Reply, setReply] = useState(false);

  return (
    <>
      <div className="p-2 pb-14 mx-auto space-y-5  w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] mt-7">
        <div className="flex flex-col gap-5">
          <div className="border-[1px] border-gray-300 p-5 cursor-pointer">
            <h1 className="text-lg font-bold">{data.state.q}</h1>
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
            {data.state.comment.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col gap-5 border-[1px] border-b-0 border-gray-300 p-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="w-7 h-7 rounded-full"
                    />
                    <h1 className="text-sm font-semibold text-gray-500">
                      Rahul
                    </h1>
                    <BsPeople size={20} color="gray" />
                  </div>
                  <div>
                    <p>{item.a}</p>
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
