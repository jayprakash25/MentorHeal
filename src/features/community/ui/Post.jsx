import React from "react";
import { BsPeople } from "react-icons/bs";

export default function Post() {
  return (
    <>
      <div className="pl-2 mt-6 space-y-2">
        <div className="flex items-center gap-3">
          <img
            src="https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
            alt=""
            className="rounded-full w-7 h-7"
          />
          <button className="text-sm font-semibold text-gray-500 flex items-center gap-2 border-[1px] rounded-full px-8 py-1">
            <h1>Public</h1>
            <BsPeople size={20} color="gray" />
          </button>
        </div>
        <textarea
          cols={20}
          rows={12}
          type="text"
          className=" mx-auto text-lg w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw]  border-b-2 border-gray-300 outline-none"
          placeholder="Say Something .."
        />
        <div class="flex justify-end gap-5">
          <button className="px-5 font-semibold text-white cursor-pointer bg-gradient-to-l from-cyan-400 via-cyan-400 to-cyan-300 py-1.5 rounded-full">
            Cancel
          </button>
          <button className="px-5 font-semibold text-white cursor-pointer bg-gradient-to-l from-cyan-400 via-cyan-400 to-cyan-300 py-1.5 rounded-full">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
