import React from "react";
import { BsPeople } from "react-icons/bs";

export default function ReplyModel({ setReply }) {
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
            <h1>Public</h1>
            <BsPeople size={20} color="gray" />
          </button>
        </div>
        <textarea
          cols={7}
          rows={2}
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
          <button className="px-5 font-semibold text-white cursor-pointer bg-gradient-to-l from-cyan-400 via-cyan-400 to-cyan-300 py-1.5 rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
